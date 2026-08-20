const scene=document.querySelector('.scene');
const sceneObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting && !scene.dataset.played){
      scene.dataset.played='1';
      scene.classList.add('play');
    }
  });
},{threshold:.35});
sceneObserver.observe(scene);

const stacks=[...document.querySelectorAll('[data-focus-stack]')];

function updateFocus(){
  const center=window.innerHeight/2;
  stacks.forEach(stack=>{
    const lines=[...stack.querySelectorAll('.focus-line')];
    let active=0,best=Infinity;
    lines.forEach((line,i)=>{
      const r=line.getBoundingClientRect();
      const d=Math.abs((r.top+r.height/2)-center);
      if(d<best){best=d;active=i}
    });
    lines.forEach((line,i)=>{
      line.classList.toggle('is-active',i===active);
      line.classList.toggle('is-near',Math.abs(i-active)===1);
    });
  });
}
let ticking=false;
function requestFocus(){
  if(ticking)return;
  ticking=true;
  requestAnimationFrame(()=>{updateFocus();ticking=false});
}
window.addEventListener('scroll',requestFocus,{passive:true});
window.addEventListener('resize',requestFocus);
window.addEventListener('load',updateFocus);
updateFocus();
