const toggleBtn = document.querySelector("._toggleBtn");
const menu = document.querySelector("._menu");
const icons = document.querySelector("._icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
