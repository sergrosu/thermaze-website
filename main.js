// menu
const windowDesktop = window.matchMedia("(min-width: 60em)");
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("main-nav");

function handleWidth() {
  if (!windowDesktop.matches) {
    // if on mobile
    menuBtn.addEventListener("click", handleClick);
    menuBtn.classList.remove("hidden");
    menuBtn.setAttribute("aria-hidden", false);
    nav.classList.add("hidden");
    nav.setAttribute("aria-hidden", true);
  } else {
    // if on desktop
    menuBtn.removeEventListener("click", handleClick);
    menuBtn.classList.add("hidden");
    menuBtn.setAttribute("aria-hidden", true);
    nav.classList.remove("hidden");
    nav.setAttribute("aria-hidden", false);
  }
}

function handleClick() {
  menuBtn.classList.toggle("opened");
  menuBtn.setAttribute("aria-expanded", menu.classList.contains("opened"));
  nav.classList.toggle("hidden");
  nav.setAttribute("aria-hidden", nav.classList.contains("hidden"));
}

handleWidth();

windowDesktop.addEventListener("change", handleWidth);



// review carousel
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const cardsContainer = document.querySelector(".review-cards");
const reviews = Array.from(document.querySelectorAll(".review-card"));

cardsContainer.innerHTML = "";

cardsContainer.appendChild(getRandomReview(reviews));


function getRandomReview (reviews) {
  return reviews[Math.floor(Math.random() * reviews.length)]
}