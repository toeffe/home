(function () {
  const KEY = 'toeffe-theme';
  const root = document.documentElement;

  function isThemePageFilename(name) {
    const f = (name || '').toLowerCase();
    return f === 'index.html' || f === 'music.html';
  }

  /** Carry theme across index ↔ music (needed when localStorage is per-file, e.g. file://). */
  function patchInternalLinks() {
    const theme = root.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') return;

    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      if (/^https?:\/\//i.test(href)) {
        if (String(location.origin) === 'null') return;
        try {
          var abs = new URL(href);
          if (abs.origin !== location.origin) return;
          var name = (abs.pathname.split('/').pop() || '').toLowerCase();
          if (!isThemePageFilename(name)) return;
          abs.searchParams.set('theme', theme);
          a.setAttribute('href', abs.href);
        } catch (e) {}
        return;
      }

      try {
        var u = new URL(href, location.href);
        var file = (u.pathname.split('/').pop() || '').toLowerCase();
        if (!isThemePageFilename(file)) return;
        u.searchParams.set('theme', theme);
        var rawPath = href.split('#')[0].split('?')[0];
        var prefix = rawPath.lastIndexOf('/') >= 0 ? rawPath.slice(0, rawPath.lastIndexOf('/') + 1) : '';
        a.setAttribute('href', prefix + file + u.search + u.hash);
      } catch (e) {}
    });
  }

  function syncToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const isLight = root.dataset.theme === 'light';
    btn.textContent = isLight ? 'Dark page' : 'Bright page';
    const aria = isLight
      ? 'Switch to a dark page background (easier in low light)'
      : 'Switch to a bright page background (easier in daylight)';
    btn.setAttribute('aria-label', aria);
    btn.setAttribute('title', aria);
    btn.setAttribute('aria-pressed', String(isLight));
  }

  document.getElementById('themeToggle')?.addEventListener('click', function () {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    root.style.colorScheme = next === 'light' ? 'light' : 'dark';
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    syncToggle();
    patchInternalLinks();
  });

  syncToggle();
  patchInternalLinks();

  const mq = window.matchMedia('(prefers-color-scheme: light)');
  mq.addEventListener('change', function () {
    let stored = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch (e) {}
    if (stored === 'light' || stored === 'dark') return;
    const next = mq.matches ? 'light' : 'dark';
    root.dataset.theme = next;
    root.style.colorScheme = next === 'light' ? 'light' : 'dark';
    syncToggle();
    patchInternalLinks();
  });
})();
