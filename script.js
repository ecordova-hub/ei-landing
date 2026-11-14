// Language switch (EN/ES). Without JavaScript the page shows English.
(function () {
  var root = document.documentElement;
  var titles = {
    en: "Expansive Ideas — AI Consulting for SMBs",
    es: "Expansive Ideas — Consultoría en IA para PyMEs"
  };

  function setLang(lang) {
    if (lang !== "en" && lang !== "es") return;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    document.title = titles[lang];
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
    try { localStorage.setItem("ei-lang", lang); } catch (e) { /* storage unavailable */ }
  }

  var saved = null;
  try { saved = localStorage.getItem("ei-lang"); } catch (e) { /* ignore */ }
  var browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  setLang(saved || (browser === "es" ? "es" : "en"));

  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
