document.addEventListener('DOMContentLoaded', () => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  let priorFocus;
  const focusables = () => [...menu?.querySelectorAll('a,button') || []];
  const setMenu = open => {
    if (!toggle || !menu) return;
    if (open) priorFocus = document.activeElement;
    body.classList.toggle('menu-open', open); body.classList.toggle('scroll-locked', open);
    toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    if (open) focusables()[0]?.focus(); else if (priorFocus === toggle || menu.contains(priorFocus)) toggle.focus();
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => {
    if (!body.classList.contains('menu-open')) return;
    if (e.key === 'Escape') return setMenu(false);
    if (e.key !== 'Tab') return;
    const items = focusables(), first = items[0], last = items.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  matchMedia('(min-width:621px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  const progress = document.querySelector('.scroll-progress span');
  const updateProgress = () => { if (progress) { const max = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`; } };
  updateProgress(); addEventListener('scroll', updateProgress, {passive:true}); addEventListener('resize', updateProgress, {passive:true});

  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) reveals.forEach(el => el.classList.add('is-visible'));
  else { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.08,rootMargin:'0px 0px -4%'}); reveals.forEach(el => observer.observe(el)); }

  document.querySelector('[data-replay-animation]')?.addEventListener('click', e => { const card = e.currentTarget.closest('.behavior-card'); card.classList.add('animation-restart'); requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('animation-restart'))); });

  const sources = [...document.querySelectorAll('.source-choice')], steps = [...document.querySelectorAll('.pipeline-step')];
  const run = document.querySelector('[data-run-demo]'), sourceOut = document.querySelector('[data-demo-source]'), detailOut = document.querySelector('[data-demo-detail]'), stateOut = document.querySelector('[data-demo-output]');
  sources.forEach(source => source.addEventListener('click', () => { sources.forEach(x => x.classList.toggle('is-active', x === source)); sourceOut.textContent = source.dataset.source; detailOut.textContent = source.dataset.detail; stateOut.textContent = 'Ready to detect'; steps.forEach((x,i) => { x.classList.toggle('is-current', i === 0); x.classList.remove('is-complete'); }); }));
  run?.addEventListener('click', async () => { run.disabled = true; const labels = ['Detected','Normalized','Sync-ready']; for (let i=0;i<steps.length;i++) { steps.forEach((x,j) => { x.classList.toggle('is-current', j === i); x.classList.toggle('is-complete', j < i); }); stateOut.textContent = labels[i]; if (!reduced) await new Promise(r => setTimeout(r, 480)); } steps.forEach(x => x.classList.add('is-complete')); run.disabled = false; });

  const history = [['v1.png','Too SaaS-like','Clear structure, but it looked like a product landing page instead of a personal portfolio.'],['v2.png','Style competed with meaning','More personality, but visual devices distracted from the product thinking.'],['v3.png','The idea became clearer','Behavior-first positioning moved forward; hierarchy and evidence still needed work.'],['v4.png','Evidence over claims','The current direction keeps the warmth while making interaction and real iteration visible.']];
  const viewer=document.querySelector('[data-history-viewer]'), image=document.querySelector('[data-history-image]'), title=document.querySelector('[data-history-title]'), copy=document.querySelector('[data-history-copy]'), tabs=[...document.querySelectorAll('[data-history-index]')];
  const selectHistory = index => { tabs.forEach((tab,i) => { tab.setAttribute('aria-selected', String(i===index)); tab.tabIndex=i===index?0:-1; }); viewer.classList.add('is-switching'); setTimeout(() => { const item=history[index]; image.src=item[0]; image.alt=`Portfolio version ${index+1}: ${item[1]}`; title.textContent=item[1]; copy.textContent=item[2]; viewer.classList.remove('is-switching'); }, reduced?0:150); };
  tabs.forEach((tab,index) => { tab.addEventListener('click', () => selectHistory(index)); tab.addEventListener('keydown', e => { if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return; e.preventDefault(); const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length; selectHistory(next); tabs[next].focus(); }); });

  const reading=document.querySelector('[data-reading-toggle]'), dense=[...document.querySelectorAll('[data-bionic]')];
  reading?.addEventListener('click', () => { const active=reading.getAttribute('aria-pressed')!=='true'; reading.setAttribute('aria-pressed', String(active)); body.classList.toggle('reading-mode',active); dense.forEach(block => { if (!block.dataset.original) block.dataset.original=block.textContent; if (!active) return block.textContent=block.dataset.original; block.innerHTML=block.dataset.original.split(/(\s+)/).map(token => /^\s+$/.test(token)?token:`<span class="bionic-word"><strong>${token.slice(0,Math.max(1,Math.ceil(token.length*.45)))}</strong>${token.slice(Math.max(1,Math.ceil(token.length*.45)))}</span>`).join(''); }); });

  const caseLinks=[...document.querySelectorAll('.case-progress a[href^="#"]')];
  if (caseLinks.length && 'IntersectionObserver' in window) { const observer=new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) caseLinks.forEach(link => link.classList.toggle('is-active',link.hash===`#${entry.target.id}`)); }),{rootMargin:'-25% 0px -65%'}); caseLinks.forEach(link => { const section=document.querySelector(link.hash); if(section) observer.observe(section); }); }
  if (!reduced) document.querySelectorAll('a.internal-link').forEach(link => link.addEventListener('click', e => { if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||link.target==='_blank') return; const href=link.getAttribute('href'); if(!href||href.startsWith('#')) return; e.preventDefault(); body.classList.add('is-leaving'); setTimeout(() => location.href=href,260); }));
});
