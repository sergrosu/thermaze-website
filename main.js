// menu
const windowDesktop = window.matchMedia("(min-width: 60em)");
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("main-nav");

function handleWidth () {
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
  };
};

function handleClick () {
  menuBtn.classList.toggle("opened");
  menuBtn.setAttribute("aria-expanded", menu.classList.contains("opened"));
  nav.classList.toggle("hidden");
  nav.setAttribute("aria-hidden", nav.classList.contains("hidden"));
};

handleWidth();

windowDesktop.addEventListener("change", handleWidth);





















// function handleMobileMenu () {
//   console.log(`desktop: ${windowDesktop.matches}`)
//   if (!windowDesktop.matches) {
//     console.log("you're on mobile")
//     const menu = document.getElementById("menu");
//     const nav = document.getElementById("main-nav");
  
//     menu.addEventListener("click", handleClick);
//   }
// }

// handleMobileMenu()

// windowDesktop.addEventListener("change", updateWindowSize)


// function updateWindowSize() {
//   console.log("changed")
//   handleMobileMenu();
// }

// function checkDesktop() {
//   return windowDesktop
// }






// function handleClick () {
//   this.classList.toggle("opened");
//   this.setAttribute("aria-expanded", this.classList.contains("opened"));
//   nav.classList.toggle("hidden");
//   nav.setAttribute("aria-hidden", nav.classList.contains("hidden"))
// };


// x.addEventListener("change", handleScreenSizeChange)

// function handleScreenSizeChange() {
//   console.log("window size changed")
//   if (!x.matches) {

    
    
    
    
//   }
// }

