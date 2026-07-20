/* JMM Construction — interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Nav shadow on scroll
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
  });

  // Reveal on scroll
  var revealTargets = document.querySelectorAll(
    ".card, .feature, .about__text, .about__card, .contact__form, .contact__info, .section__head"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  // Current year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Estimate form -> mailto
  var form = document.getElementById("estimateForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("name").value || "").trim();
      var phone = (document.getElementById("phone").value || "").trim();
      var service = document.getElementById("service").value;
      var details = (document.getElementById("details").value || "").trim();

      if (!name) {
        document.getElementById("name").focus();
        return;
      }

      var subject = "Free Estimate Request - " + service;
      var body =
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Service Needed: " + service + "\n\n" +
        "Project Details:\n" + details + "\n";

      window.location.href =
        "mailto:jmmconstructionnyc@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
