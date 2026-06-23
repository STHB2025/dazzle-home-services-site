const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(
  ".service-card, .why-grid div, .gallery-grid img, .intro-box, .qr-card"
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => {
  observer.observe(item);
});
