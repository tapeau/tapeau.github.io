/* ============================================================
   Terminal Portfolio — script.js
   1. Dark/light mode toggle (persists in localStorage)
   2. Typewriter effect: hero greeting + section headers
   ============================================================ */

(function () {
  "use strict";

  var TYPE_SPEED = 28; // ms per character — one speed everywhere for visual rhythm
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateToggleLabel() {
    if (!toggle) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable — theme still applies for this page */
      }
      updateToggleLabel();
    });
    updateToggleLabel();
  }

  /* ---------- Typewriter ---------- */

  // Types el's original text character by character. The full text lives in
  // the HTML, so the site still reads fine without JavaScript.
  function typeOut(el, done) {
    var text = el.textContent;
    el.setAttribute("aria-label", text); // screen readers get the full text immediately
    el.textContent = "";
    el.classList.add("typing");

    var i = 0;
    var timer = setInterval(function () {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(timer);
        el.classList.remove("typing");
        el.removeAttribute("aria-label");
        if (done) done();
      }
    }, TYPE_SPEED);
  }

  if (!reducedMotion) {
    // Hero greeting: types on page load. The blinking cursor (.cursor) sits
    // after the target span and stays after typing finishes.
    var hero = document.querySelector(".type-hero");
    if (hero) typeOut(hero);

    // Section headers: type once when scrolled into view.
    var headers = document.querySelectorAll(".type-on-view");
    if ("IntersectionObserver" in window && headers.length) {
      var seen = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            typeOut(entry.target);
          }
        });
      }, { threshold: 0.4 });

      headers.forEach(function (h) {
        seen.observe(h);
      });
    }
  }
})();
