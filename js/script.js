const header = document.querySelector("header");

// --------- Sticky NavBar --------- //

function stickyNavBar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavBar);

//

function updateFontSizeForHeading() {
  var parentElement = document.getElementById("section-2");
  var textHeading = document.querySelector(".section-2 .head .heading");
  var textHeadingSection3H1 = document.querySelector(
    ".section-3 .container .head-text h1:nth-child(2)"
  );
  var textHeadingSection3H2 = document.querySelector(
    ".section-3 .container .head-text h1:nth-child(3)"
  );
  var parentWidth = parentElement.clientWidth;

  var maxFontSize = Math.floor(parentWidth / 6);
  textHeading.style.fontSize = maxFontSize + "px";
  textHeadingSection3H1.style.fontSize = maxFontSize / 1.2 + "px";
  textHeadingSection3H2.style.fontSize = maxFontSize / 1.2 + "px";
}
window.addEventListener("resize", updateFontSizeForHeading);

updateFontSizeForHeading();

//

function updateFontSizeForTitle() {
  var parentElement = document.getElementById("section-2");
  var textTitle = document.querySelector(".section-2 .head .title");
  var textTitleSection3 = document.querySelector(
    ".section-3 .container .head-text p  "
  );
  var parentWidth = parentElement.clientWidth;

  var halfMaxFontSize = Math.floor(parentWidth / 30);
  textTitle.style.fontSize = halfMaxFontSize + "px";
  textTitleSection3.style.fontSize = halfMaxFontSize / 1.1 + "px";
}

window.addEventListener("resize", updateFontSizeForTitle);

updateFontSizeForTitle();

//

function createIntersectionObserver(classToToggle) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add(classToToggle);
          observerHeroSection.unobserve(entry.target);
          observerSection1.unobserve(entry.target);
          observerSection2.unobserve(entry.target);
          observerSection3.unobserve(entry.target);
          observerSection4.unobserve(entry.target);
          observerSection5.unobserve(entry.target);
          observerSection6.unobserve(entry.target);
          observerSection7.unobserve(entry.target);
          observerSection8.unobserve(entry.target);
          observerSection9.unobserve(entry.target);
          observerSection10.unobserve(entry.target);
          observerSection11.unobserve(entry.target);
          observerSection12.unobserve(entry.target);
          observerBigCard.unobserve(entry.target);
          observerTwoCard.unobserve(entry.target);
          observerSection3HeadText.unobserve(entry.target);
          observerSection3ThreeCards.unobserve(entry.target);
        } else {
          entry.target.classList.remove(classToToggle);
        }
      });
    },
    { rootMargin: "0px 0px -250px 0px" } // تحديد الهوامش هنا
  );
}

//
const observerHeroSection = createIntersectionObserver("show-hero-section");
const hiddenElementsHeroSection = document.querySelectorAll(".hero-section");
hiddenElementsHeroSection.forEach((el) => observerHeroSection.observe(el));
//
const observerSection1 = createIntersectionObserver("show-section-1");
const hiddenElementsSection1 = document.querySelectorAll(".section-1");
hiddenElementsSection1.forEach((el) => observerSection1.observe(el));
//
const observerSection2 = createIntersectionObserver("show-section-2");
const hiddenElementsSection2 = document.querySelectorAll(".section-2");
hiddenElementsSection2.forEach((el) => observerSection2.observe(el));
//
const observerBigCard = createIntersectionObserver("show-big-card");
const hiddenElementsBigCard = document.querySelectorAll(".big-card");
hiddenElementsBigCard.forEach((el) => observerBigCard.observe(el));
//
const observerTwoCard = createIntersectionObserver("show-two-card");
const hiddenElementsTwoCard = document.querySelectorAll(".two-card");
hiddenElementsTwoCard.forEach((el) => observerTwoCard.observe(el));
//
const observerSection3 = createIntersectionObserver("show-section-3");
const hiddenElementsSection3 = document.querySelectorAll(".section-3");
hiddenElementsSection3.forEach((el) => observerSection3.observe(el));
//
const observerSection3HeadText = createIntersectionObserver("show-head-text");
const hiddenElementsSection3HeadText = document.querySelectorAll(".head-text");
hiddenElementsSection3HeadText.forEach((el) =>
  observerSection3HeadText.observe(el)
);
//
const observerSection3ThreeCards =
  createIntersectionObserver("show-three-card");
const hiddenElementsSection3ThreeCards =
  document.querySelectorAll(".three-card");
hiddenElementsSection3ThreeCards.forEach((el) =>
  observerSection3ThreeCards.observe(el)
);
//
const observerSection4 = createIntersectionObserver("show-section-4");
const hiddenElementsSection4 = document.querySelectorAll(".section-4");
hiddenElementsSection4.forEach((el) => observerSection4.observe(el));
//
const observerSection5 = createIntersectionObserver("show-section-5");
const hiddenElementsSection5 = document.querySelectorAll(".section-5");
hiddenElementsSection5.forEach((el) => observerSection5.observe(el));
//
const observerSection6 = createIntersectionObserver("show-section-6");
const hiddenElementsSection6 = document.querySelectorAll(".section-6");
hiddenElementsSection6.forEach((el) => observerSection6.observe(el));
//
const observerSection7 = createIntersectionObserver("show-section-7");
const hiddenElementsSection7 = document.querySelectorAll(".section-7");
hiddenElementsSection7.forEach((el) => observerSection7.observe(el));
//
const observerSection8 = createIntersectionObserver("show-section-8");
const hiddenElementsSection8 = document.querySelectorAll(".section-8");
hiddenElementsSection8.forEach((el) => observerSection8.observe(el));
//
const observerSection9 = createIntersectionObserver("show-section-9");
const hiddenElementsSection9 = document.querySelectorAll(".section-9");
hiddenElementsSection9.forEach((el) => observerSection9.observe(el));
//
const observerSection10 = createIntersectionObserver("show-section-10");
const hiddenElementsSection10 = document.querySelectorAll(".section-10");
hiddenElementsSection10.forEach((el) => observerSection10.observe(el));
//
const observerSection11 = createIntersectionObserver("show-section-11");
const hiddenElementsSection11 = document.querySelectorAll(".section-11");
hiddenElementsSection11.forEach((el) => observerSection11.observe(el));
//
const observerSection12 = createIntersectionObserver("show-section-12");
const hiddenElementsSection12 = document.querySelectorAll(".section-12");
hiddenElementsSection12.forEach((el) => observerSection12.observe(el));
//
