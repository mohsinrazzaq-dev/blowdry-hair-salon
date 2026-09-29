const header = document.getElementById("header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav a");

toggle.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

navLinks.forEach(link => link.addEventListener("click", () => {
  header.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
}));

const form = document.getElementById("bookingForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", e => {
  e.preventDefault();
  note.textContent = "Thank you! Your appointment request has been received. Our team will contact you shortly.";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s => observer.observe(s));
