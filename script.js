/* ==========================================================================
   ÖzServer — Tema dəyişdirmə (dark / light)
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'ozserver-theme';
  var root = document.documentElement;
  var btn  = document.querySelector('[data-theme-toggle]');

  // Yüklənəndə əvvəlcə localStorage-ə bax
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  function current() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function toggle() {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    if (btn) btn.textContent = next === 'dark' ? '☀' : '☾';
  }

  // İlkin ikon
  if (btn) {
    btn.textContent = current() === 'dark' ? '☀' : '☾';
    btn.addEventListener('click', toggle);
  }
})();
