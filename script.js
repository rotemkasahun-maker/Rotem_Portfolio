
const scene = document.querySelector('.key-scene');

function playScene() {
  if (!scene || scene.dataset.played) return;
  scene.dataset.played = '1';
  scene.classList.add('play');
}

if (scene) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) playScene();
    });
  }, { threshold: 0.22 });
  obs.observe(scene);

  // Fallback: if observer behaves oddly, play shortly after page load
  setTimeout(() => {
    const r = scene.getBoundingClientRect();
    if (r.top < window.innerHeight * 1.4 && r.bottom > 0) playScene();
  }, 700);
}

const focusBlocks = [...document.querySelectorAll('[data-focus-block]')];

function updateFocus() {
  const center = window.innerHeight / 2;
  focusBlocks.forEach(block => {
    const lines = [...block.querySelectorAll('.focus-line')];
    if (!lines.length) return;

    let active = 0;
    let best = Infinity;

    lines.forEach((line, index) => {
      const rect = line.getBoundingClientRect();
      const lineCenter = rect.top + rect.height / 2;
      const distance = Math.abs(lineCenter - center);
      if (distance < best) {
        best = distance;
        active = index;
      }
    });

    lines.forEach((line, index) => {
      line.classList.toggle('is-active', index === active);
      line.classList.toggle('is-near', Math.abs(index - active) === 1);
    });
  });
}

let ticking = false;
function requestUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateFocus();
    ticking = false;
  });
}

window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
window.addEventListener('load', updateFocus);
updateFocus();
