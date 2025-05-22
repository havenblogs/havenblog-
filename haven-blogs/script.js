// Get references to menu toggle and navbar
const menuBtn = document.getElementById('menuToggle');
const navMenu = document.getElementById('navbar');

// Show or hide menu on toggle click
menuBtn.addEventListener('click', function () {
  navMenu.classList.toggle('show');
});

// Close nav if user clicks outside of it
document.addEventListener('click', function (e) {
  const clickedInsideMenu = navMenu.contains(e.target) || menuBtn.contains(e.target);
  if (!clickedInsideMenu) {
    navMenu.classList.remove('show');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = {
    home: document.querySelector('nav a[href="#home"]'),
    blogs: document.querySelector('nav a[href="#blogs"]'),
    about: document.querySelector('nav a[href="#about"]'),
  };

  const sections = {
    home: document.getElementById("home"),
    blogs: document.getElementById("blogs"),
    about: document.querySelector('.about-section'),
  };

  // Smooth scroll on click for links
  Object.entries(navLinks).forEach(([key, link]) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = sections[key];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Observer to toggle 'active' class when in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          Object.values(navLinks).forEach((link) => link.classList.remove("active"));
          const activeLink = navLinks[id];
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.5, // Adjust visibility percentage
    }
  );

  // Observe both home and blogs sections
  Object.values(sections).forEach((section) => {
    if (section) observer.observe(section);
  });
});

// Smooth scroll for specific sections if clicked on
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
  e.preventDefault();
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
});
document.getElementById("menuToggle").addEventListener("click", function () {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
})
// Smooth scroll for specific sections if clicked on
document.querySelector('a[href="#blogs"]').addEventListener('click', function (e) {
  e.preventDefault();
  const blogsection = document.querySelector('.blog-section');
  if (blogsection) {
    blogsection.scrollIntoView({ behavior: 'smooth' });
  }
});
  window.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('a[href="#home"]');

    // Optionally handle file-based navigation
    const currentURL = window.location.href;

    if (currentURL.includes("#home") || currentURL.endsWith("index.html") || currentURL.endsWith("/")) {
      homeLink.classList.add("active");
    }
  });