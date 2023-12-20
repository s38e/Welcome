const header = document.querySelector("header");

// --------- Sticky NavBar --------- //

function stickyNavBar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavBar);
