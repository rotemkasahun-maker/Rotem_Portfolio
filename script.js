const svg = document.getElementById('keyAnimation');
const hand = document.getElementById('hand');
const keyObj = document.getElementById('keyObj');
const reminder = document.getElementById('reminder');
const badMark = document.getElementById('badMark');
const hook = document.getElementById('hook');
const goodMark = document.getElementById('goodMark');
const finalMessage = document.getElementById('finalMessage');
const replay = document.getElementById('replayAnimation');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function setOpacity(el, v) { el.style.opacity = v; }
function setTransform(el, v) { el.style.transform = v; el.style.transformBox = 'fill-box'; el.style.transformOrigin = 'center'; }

async function fade(el, from, to, duration=250) {
  el.style.transition = `opacity ${duration}ms ease`;
  setOpacity(el, from);
  await wait(20);
  setOpacity(el, to);
  await wait(duration + 20);
}

async function move(el, transform, duration=420) {
  el.style.transition = `transform ${duration}ms cubic-bezier(.2,.8,.2,1), opacity 180ms ease`;
  setOpacity(el, 1);
  setTransform(el, transform);
  await wait(duration + 20);
}

async function resetScene() {
  [hand,keyObj,reminder,badMark,hook,goodMark,finalMessage].forEach(el => {
    el.style.transition = 'none';
    setOpacity(el,0);
    setTransform(el,'translate(0px,0px)');
  });
  await wait(40);
}

async function failCycle(speed=1) {
  // enter
  await move(hand, 'translate(0px,0px)', 260*speed);
  await move(keyObj, 'translate(0px,0px) rotate(0deg)', 120*speed);

  // release keys to table
  await move(keyObj, 'translate(155px,80px) rotate(12deg)', 340*speed);
  setOpacity(hand,0);
  await wait(80*speed);

  await fade(reminder,0,1,180*speed);
  await fade(badMark,0,1,150*speed);
  await wait(320*speed);

  await fade(reminder,1,0,150*speed);
  await fade(badMark,1,0,120*speed);
  setOpacity(keyObj,0);
  await wait(80*speed);
}

async function successCycle() {
  await fade(hook,0,1,260);
  await wait(260);

  await move(hand, 'translate(0px,0px)', 260);
  await move(keyObj, 'translate(0px,0px)', 100);
  await move(keyObj, 'translate(155px,-50px) rotate(88deg)', 420);

  // a tiny hanging swing
  keyObj.style.transition = 'transform 180ms ease-in-out';
  setTransform(keyObj,'translate(155px,-50px) rotate(96deg)');
  await wait(190);
  setTransform(keyObj,'translate(155px,-50px) rotate(84deg)');
  await wait(190);
  setTransform(keyObj,'translate(155px,-50px) rotate(90deg)');
  await wait(220);

  setOpacity(hand,0);
  await fade(goodMark,0,1,220);
  await wait(360);
  await fade(finalMessage,0,1,420);
  await wait(1900);
}

let running = false;
let runToken = 0;

async function playAnimation() {
  if (running) runToken++;
  const token = ++runToken;
  running = true;
  await resetScene();

  await failCycle(1);
  if (token !== runToken) return;
  await failCycle(.82);
  if (token !== runToken) return;
  await failCycle(.68);
  if (token !== runToken) return;
  await successCycle();
  if (token !== runToken) return;

  running = false;
  // loop so a visitor who scrolls in late still sees it
  await wait(2500);
  if (token === runToken) playAnimation();
}

replay.addEventListener('click', () => {
  runToken++;
  running = false;
  playAnimation();
});

// Start only when the animation is near the viewport, with a robust fallback.
let started = false;
const start = () => {
  if (started) return;
  started = true;
  playAnimation();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) start();
  });
}, { threshold: 0.18 });

observer.observe(svg);
setTimeout(() => {
  const r = svg.getBoundingClientRect();
  if (r.top < window.innerHeight * 1.5 && r.bottom > -100) start();
}, 900);

// scroll focus only in longer case-study copy
const blocks = [...document.querySelectorAll('[data-focus-block]')];
function updateFocus(){
  const center = window.innerHeight/2;
  blocks.forEach(block=>{
    const lines=[...block.querySelectorAll('.focus-line')];
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
window.addEventListener('scroll',()=>{
  if(ticking)return;
  ticking=true;
  requestAnimationFrame(()=>{updateFocus();ticking=false});
},{passive:true});
window.addEventListener('load',updateFocus);
window.addEventListener('resize',updateFocus);
