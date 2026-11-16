/* ═══════════════════════════════════════════════════════
   nav.js — Sticky nav scroll effects + progress bar
   ═══════════════════════════════════════════════════════ */

(function () {
  function init() {
    var nav = document.querySelector('.nav');
    var progressFill = document.querySelector('.scroll-progress-fill');
    // On course pages the top line shows position within the module and is
    // driven by course.js instead of page scroll.
    var isCoursePage = document.body && (document.body.hasAttribute('data-module') || document.body.hasAttribute('data-bonus'));
    if (isCoursePage) progressFill = null;

    if (!nav) return;

    window.addEventListener('scroll', function () {
      // add shadow on scroll
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // update progress bar
      if (progressFill) {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
        progressFill.style.width = pct + '%';
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
