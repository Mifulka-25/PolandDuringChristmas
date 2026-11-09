/* Christmas in Poland — Interactivity */

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal sections on scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".wigilia-card, .dish-card, .custom-item, .intro-text, .intro-image, .carols-text, .carols-image").forEach((el) => {
    observer.observe(el);
  });

  // Smooth reveal style is handled by CSS; add the 'reveal' class via JS if desired.
  // Here we simply mark sections as revealed so CSS transitions can trigger.

  // Lazy-load placeholder images gracefully
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      // If the PNG is missing, keep the colored placeholder background
      img.style.display = "none";
    });
  });
});
