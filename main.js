const menu = document.getElementById("menu");
const nav = document.getElementById("main-nav");

menu.addEventListener("click", handleClick);

function handleClick () {
  this.classList.toggle("opened");
  this.setAttribute("aria-expanded", this.classList.contains("opened"));
  nav.classList.toggle("hidden");
  nav.setAttribute("aria-hidden", nav.classList.contains("hidden"))
};