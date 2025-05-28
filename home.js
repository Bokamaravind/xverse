
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  if (currentTheme === "light") {
    html.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️"; // sun icon for light mode
  } else {
    html.setAttribute("data-theme", "light");
    themeToggle.textContent = "🌙"; // moon icon for dark mode
  }
});

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

function submitForm(event) {
  event.preventDefault();
  alert("Message submitted successfully!");
}
function toggleTheme() {
  const body = document.body;
  const logo = document.getElementById('logo1');

  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    logo.src = 'assets/darklogo.jpg';
  } else {
    logo.src = 'assets/logo1.jpeg';
  }
}
