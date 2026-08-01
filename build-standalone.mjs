import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { transform } from "esbuild";

const require = createRequire(import.meta.url);

const sourcePath = new URL("./src/index.html", import.meta.url);
const outputPath = new URL("./index.html", import.meta.url);
const source = fs.readFileSync(sourcePath, "utf8");
const appOpen = '<script type="text/babel" data-presets="react">';
const appStart = source.indexOf(appOpen);
const appEnd = source.lastIndexOf("</script>");

if (appStart < 0 || appEnd < appStart) throw new Error("Application script not found");

const jsx = source.slice(appStart + appOpen.length, appEnd);
const compiled = await transform(jsx, {
  loader: "jsx",
  target: "es2018",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  minify: false,
  legalComments: "none",
});

const reactDir = path.dirname(require.resolve("react"));
const reactDomDir = path.dirname(require.resolve("react-dom"));
const runtime = [
  path.join(reactDir, "umd/react.production.min.js"),
  path.join(reactDomDir, "umd/react-dom.production.min.js"),
].map(file => `<script>${fs.readFileSync(file, "utf8")}</script>`).join("\n") + "\n";

let shell = source.slice(0, appStart)
  .replace(/^<script crossorigin src="https:\/\/unpkg\.com\/react@18\/umd\/react\.production\.min\.js"><\/script>\n/m, "")
  .replace(/^<script crossorigin src="https:\/\/unpkg\.com\/react-dom@18\/umd\/react-dom\.production\.min\.js"><\/script>\n/m, "")
  .replace(/^<script src="https:\/\/unpkg\.com\/@babel\/standalone\/babel\.min\.js"><\/script>\n/m, "");
const styleStart = shell.indexOf("<style>");
if (styleStart < 0) throw new Error("Style block not found");
shell = shell.slice(0, styleStart) + runtime + shell.slice(styleStart);

fs.writeFileSync(outputPath, `${shell}<script>${compiled.code}</script>\n</body>\n</html>\n`);
console.log(`Built ${outputPath.pathname}`);
