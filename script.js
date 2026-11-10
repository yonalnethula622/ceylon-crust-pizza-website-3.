
// ======================================
// CEYLON CRUST PIZZA
// WEBSITE JAVASCRIPT
// ======================================


// 1. MOBILE NAVIGATION

const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {

  mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    mobileMenu.textContent = isOpen ? "✕" : "☰";

    mobileMenu.setAttribute("aria-expanded", isOpen);

  });


  // Close menu after selecting a link

  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("show");

      mobileMenu.textContent = "☰";

      mobileMenu.setAttribute("aria-expanded", "false");

    });

  });

}


// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


// 3. NAVIGATION ACTIVE STATE

const sections = document.querySelectorAll("main section[id]");

const navigationItems = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

  const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navigationItems.forEach(link => {

          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + entry.target.id) {

            link.classList.add("active");

          }

        });

      }

    });

  }, {
    rootMargin: "-30% 0px -60% 0px"
  });

  sections.forEach(section => {

    sectionObserver.observe(section);

  });

}

console.log("Ceylon Crust Pizza website loaded successfully!");
