document.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- page enter + scroll progress ---------- */
  document.body.classList.add('page-enter');
  window.setTimeout(() => document.body.classList.remove('page-enter'), 620);

  const progress = document.querySelector('.scroll-progress span');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    const ratio = max > 0 ? Math.min(1, scrollY / max) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };
  updateProgress();
  addEventListener('scroll', updateProgress, { passive: true });
  addEventListener('resize', updateProgress, { passive: true });

  /* ---------- real mobile menu ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  let lastFocused = null;

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu) return;
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));

    if (open) {
      lastFocused = document.activeElement;
      const first = mobileMenu.querySelector('a');
      window.setTimeout(() => first?.focus(), reduced ? 0 : 220);
    } else if (lastFocused && document.contains(lastFocused)) {
      lastFocused.focus();
    }
  };

  menuToggle?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
    if (event.key === 'Tab' && document.body.classList.contains('menu-open') && mobileMenu) {
      const focusables = [...mobileMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')];
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  /* ---------- staged reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* ---------- active nav ---------- */
  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"], .case-progress a[href^="#"]')];
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-38% 0px -52% 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));
  }

  /* ---------- meaningful page transition ---------- */
  document.querySelectorAll('a.internal-link').forEach(link => {
    link.addEventListener('click', event => {
      if (reduced || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      event.preventDefault();

      if (document.startViewTransition) {
        document.startViewTransition(() => {
          document.body.classList.add('is-leaving');
          window.setTimeout(() => { location.href = href; }, 160);
        });
      } else {
        document.body.classList.add('is-leaving');
        setTimeout(() => { location.href = href; }, 330);
      }
    });
  });

  /* ---------- hero animation replay ---------- */
  const replay = document.querySelector('[data-replay-animation]');
  replay?.addEventListener('click', () => {
    const card = document.querySelector('.behavior-card');
    if (!card) return;
    card.classList.remove('animation-restart');
    void card.offsetWidth;
    card.classList.add('animation-restart');
    window.setTimeout(() => card.classList.remove('animation-restart'), 6500);
  });

  /* ---------- interactive Family Finance preview ---------- */
  const demo = document.querySelector('.finance-demo');
  if (demo) {
    const choices = [...demo.querySelectorAll('.source-choice')];
    const steps = [...demo.querySelectorAll('.pipeline-step')];
    const sourceEl = demo.querySelector('[data-demo-source]');
    const detailEl = demo.querySelector('[data-demo-detail]');
    const outputEl = demo.querySelector('[data-demo-output]');
    const runButton = demo.querySelector('[data-run-demo]');
    let running = false;

    const choose = (button) => {
      choices.forEach(c => c.classList.toggle('is-active', c === button));
      if (sourceEl) sourceEl.textContent = button.dataset.source || 'Input';
      if (detailEl) detailEl.textContent = button.dataset.detail || '';
      steps.forEach((step, index) => step.classList.toggle('is-current', index === 0));
      if (outputEl) outputEl.textContent = 'Waiting';
    };
    choices.forEach(button => button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      choose(button);
    }));

    runButton?.addEventListener('click', async event => {
      event.preventDefault();
      event.stopPropagation();
      if (running) return;
      running = true;
      runButton.disabled = true;
      const labels = ['Detected', 'Normalized', 'Queued'];
      for (let i = 0; i < steps.length; i++) {
        steps.forEach((step, index) => {
          step.classList.toggle('is-current', index === i);
          step.classList.toggle('is-done', index < i);
        });
        if (outputEl) outputEl.textContent = labels[i];
        await new Promise(r => setTimeout(r, reduced ? 80 : 520));
      }
      steps.forEach(step => step.classList.add('is-done'));
      steps.forEach(step => step.classList.remove('is-current'));
      if (outputEl) outputEl.textContent = 'Ready to sync';
      running = false;
      runButton.disabled = false;
    });
  }

  /* ---------- real portfolio iteration history ---------- */
  const history = document.querySelector('[data-history-viewer]');
  if (history) {
    const items = [
      { image: 'assets/history/v1.png', title: 'Too SaaS-like', copy: 'Clear structure, but it looked like a product landing page instead of a personal portfolio.' },
      { image: 'assets/history/v2.png', title: 'Warmer, but static', copy: 'The visual identity improved, but the experience still relied mostly on layout and color.' },
      { image: 'assets/history/v3.png', title: 'Clearer positioning', copy: 'Family Finance moved forward, the message sharpened, and the portfolio became easier to scan.' },
      { image: 'assets/history/v4.png', title: 'Interaction gap exposed', copy: 'The code contained motion, but the live experience still did not feel meaningfully interactive — so that became the next problem.' }
    ];
    const img = history.querySelector('[data-history-image]');
    const title = history.querySelector('[data-history-title]');
    const copy = history.querySelector('[data-history-copy]');
    const tabs = [...history.querySelectorAll('[data-history-index]')];

    const show = (index) => {
      const item = items[index];
      if (!item) return;
      history.classList.add('is-switching');
      window.setTimeout(() => {
        if (img) { img.src = item.image; img.alt = `Portfolio ${tabs[index]?.textContent || ''}: ${item.title}`; }
        if (title) title.textContent = item.title;
        if (copy) copy.textContent = item.copy;
        tabs.forEach((tab, i) => tab.setAttribute('aria-selected', String(i === index)));
        history.classList.remove('is-switching');
      }, reduced ? 0 : 150);
    };
    tabs.forEach(tab => tab.addEventListener('click', () => show(Number(tab.dataset.historyIndex))));
  }

  /* ---------- optional Lexend + bionic-style reading mode ---------- */
  const readingToggle = document.querySelector('[data-reading-toggle]');
  const bionicTargets = [...document.querySelectorAll('[data-bionic]')];

  const bionicize = (text) => text.split(/(\s+)/).map(token => {
    if (!token.trim()) return token;
    const match = token.match(/^([“"'(\[]*)([\p{L}\p{N}’'-]+)([.,!?;:”“"')\]]*)$/u);
    if (!match) return token;
    const [, lead, word, trail] = match;
    const count = Math.max(1, Math.ceil(word.length * .42));
    return `${lead}<span class="bionic-word"><strong>${word.slice(0, count)}</strong>${word.slice(count)}</span>${trail}`;
  }).join('');

  bionicTargets.forEach(el => {
    el.dataset.originalHtml = el.innerHTML;
  });

  const setReadingMode = (on) => {
    document.body.classList.toggle('reading-mode', on);
    readingToggle?.setAttribute('aria-pressed', String(on));
    const label = readingToggle?.querySelector('.reading-label');
    if (label) label.textContent = on ? 'Reading mode on' : 'Reading mode';

    bionicTargets.forEach(el => {
      if (on) {
        const plain = el.textContent || '';
        el.innerHTML = bionicize(plain);
      } else {
        el.innerHTML = el.dataset.originalHtml || el.innerHTML;
      }
    });
    try { localStorage.setItem('rotem-reading-mode', on ? '1' : '0'); } catch {}
  };

  if (readingToggle) {
    let saved = false;
    try { saved = localStorage.getItem('rotem-reading-mode') === '1'; } catch {}
    setReadingMode(saved);
    readingToggle.addEventListener('click', () => setReadingMode(!document.body.classList.contains('reading-mode')));
  }
});
