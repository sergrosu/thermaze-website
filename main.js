import './src/assets/sass/style.scss';

// menu
const windowDesktop = window.matchMedia("(min-width: 60em)");
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("main-nav");

windowDesktop.addEventListener("change", handleWidth);

function handleWidth() {
  if (!windowDesktop.matches) {
    menuBtn.addEventListener("click", handleClick);
    menuBtn.classList.remove("hidden");
    menuBtn.setAttribute("aria-hidden", false);
    nav.classList.add("hidden");
    nav.setAttribute("aria-hidden", true);
  } else {
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

// carousel logic

const fitTwo = window.matchMedia("(min-width: 60em)");
const fitThree = window.matchMedia("(min-width: 75em)");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const reviewContainer = document.querySelector(".review-cards");
const reviewCards = document.querySelectorAll(".review-card");
let visibleReviewsCount;
let firstIndex = 0;

fitTwo.addEventListener("change", widthController);
fitThree.addEventListener("change", widthController);

prevBtn.addEventListener("click", showPrevious);
nextBtn.addEventListener("click", showNext);

function widthController() {
  if (fitThree.matches) {
    visibleReviewsCount = 3;
  } else if (fitTwo.matches) {
    visibleReviewsCount = 2;
  } else {
    visibleReviewsCount = 1;
  }
  showReviewCardByIndex();
}

function showPrevious() {
  if (firstIndex === 0) {
    firstIndex = reviewCards.length;
  }
  firstIndex--;
  showReviewCardByIndex();
}

function showNext() {
  if (firstIndex === reviewCards.length - 1) {
    firstIndex = -1;
  }
  firstIndex++;
  showReviewCardByIndex();
}

function showReviewCardByIndex() {
  const reviewArray = Array.from(reviewCards);
  reviewContainer.innerHTML = "";
  for (let i = firstIndex; i < firstIndex + visibleReviewsCount; i++) {
    if (i >= reviewCards.length) {
      reviewContainer.appendChild(reviewArray[i - reviewCards.length]);
    } else {
      reviewContainer.appendChild(reviewArray[i]);
    }
  }
}

widthController();
