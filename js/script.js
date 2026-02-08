// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Dropdown (click toggle)
const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");

if (dropdown && dropBtn) {
  dropBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
}

// Contact form demo
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "✅ Message sent (demo). Connect backend to receive emails.";
    form.reset();
  });
}
