function hex2rgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');
  return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
function lum(rgb){const a=rgb.map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});
  return 0.2126*a[0]+0.7152*a[1]+0.0722*a[2];}
function ratio(f,b){const L1=lum(hex2rgb(f)),L2=lum(hex2rgb(b));
  return ((Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05));}
// blend a translucent fg over bg
function over(fg,alpha,bg){const F=hex2rgb(fg),B=hex2rgb(bg);
  const r=F.map((v,i)=>Math.round(v*alpha+B[i]*(1-alpha)));
  return '#'+r.map(v=>v.toString(16).padStart(2,'0')).join('');}

const PAGE='#F5F3EF', RAISED='#FFFFFF', SUNKEN='#FBFAF6';
const tests=[
  ['text-primary on page','#211E18',PAGE,'body',4.5],
  ['text-primary on raised','#211E18',RAISED,'body',4.5],
  ['text-secondary on page','#67625A',PAGE,'body',4.5],
  ['text-secondary on raised','#67625A',RAISED,'body',4.5],
  ['text-tertiary on page','#736F67',PAGE,'meta 11.5px',4.5],
  ['text-tertiary on raised','#736F67',RAISED,'meta',4.5],
  ['action-primary on raised','#34518F',RAISED,'links/accent',4.5],
  ['action-primary on page','#34518F',PAGE,'accent',4.5],
  ['white on action-primary','#FFFFFF','#34518F','button label',4.5],
  ['white on action-hover','#FFFFFF','#5470B4','button hover',4.5],
  ['status-pass on passBg','#3C7656',over('#3F7C5A',0.13,RAISED),'pill',4.5],
  ['status-caution on cautionBg','#8D6227',over('#B27C31',0.15,RAISED),'pill',4.5],
  ['status-fail on failBg','#B4483D',over('#B4483D',0.12,RAISED),'pill',4.5],
  ['info on infoBg','#3F5A8A',over('#3F5A8A',0.10,RAISED),'pill',4.5],
  ['input border vs field fill','#94918B','#FBFAF6','form control',3.0],
  
  ['focus ring on page','#34518F',PAGE,'focus indicator',3.0],
  ['text-primary on glass chrome','#211E18',over('#FCFBF8',0.72,PAGE),'toolbar label',4.5],
  ['text-secondary on glass chrome','#67625A',over('#FCFBF8',0.72,PAGE),'toolbar label',4.5],

  // pairings the first pass missed, added after an external review
  ['ink-3 informational on raised','#736F67',RAISED,'card index, denominators',4.5],
  ['ink-3 informational on page','#736F67',PAGE,'counts',4.5],
  ['screenshot count on raised','#736F67',RAISED,'section count',4.5],
  ['scorecard denominator','#736F67',RAISED,'x/4 readout',4.5],
  ['white on cobalt evidence chip','#FFFFFF','#34518F','evidence chip',4.5],
  ['white on amber evidence chip','#FFFFFF','#A9662F','evidence chip',4.5],
  ['white on teal evidence chip','#FFFFFF','#3D7364','evidence chip',4.5],
  ['blocked submit message','#8D6227',RAISED,'why submit is disabled',4.5],
  ['brief body on sunken','#67625A',SUNKEN,'challenge text',4.5],
  ['brief meta on sunken','#736F67',SUNKEN,'pool and date',4.5],

  // ---- second theme. Same components, different token values, measured the same way.
  ['dark: text-primary on canvas','#ECEAE5','#14161B','body',4.5],
  ['dark: text-primary on panel','#ECEAE5','#1B1E25','body',4.5],
  ['dark: text-secondary on panel','#A8A49C','#1B1E25','supporting',4.5],
  ['dark: text-tertiary on panel','#8F8B83','#1B1E25','meta',4.5],
  ['dark: action-primary on panel','#8FAAE4','#1B1E25','links/accent',4.5],
  ['dark: canvas on action-primary','#14161B','#8FAAE4','button label',4.5],
  ['dark: status-pass on its tint','#6FBE92',over('#6FBE92',0.16,'#1B1E25'),'pill',4.5],
  ['dark: status-caution on its tint','#DFAE64',over('#DFAE64',0.16,'#1B1E25'),'pill',4.5],
  ['dark: status-fail on its tint','#E58C82',over('#E58C82',0.16,'#1B1E25'),'pill',4.5],
  ['dark: text-primary on glass','#ECEAE5',over('#1E222A',0.74,'#14161B'),'toolbar label',4.5],
  ['dark: text-secondary on glass','#A8A49C',over('#1E222A',0.74,'#14161B'),'toolbar label',4.5],
  ['dark: focus ring on canvas','#8FAAE4','#14161B','focus indicator',3.0],
];
let fail=0;
console.log('name'.padEnd(34),'ratio'.padStart(6),' need  verdict');
console.log('-'.repeat(70));
for(const [n,f,b,use,need] of tests){
  const r=ratio(f,b); const ok=r>=need; if(!ok)fail++;
  console.log(n.padEnd(34), r.toFixed(2).padStart(6), ' '+need.toFixed(1), ok?' PASS':' FAIL  <-- '+use);
}
console.log('\nfailures:',fail);
