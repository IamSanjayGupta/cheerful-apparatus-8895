import { topHeader } from "../components/headerComponent.js";

//document.querySelector(".mainHeader").innerHTML = topHeader() + topHeader();

document.querySelector("#ProductMenu").addEventListener("mouseenter", () => {
   document.querySelector(".productOptions").classList.add("optionActive");
});

document.querySelector(".productOptions").addEventListener("mouseleave", () => {
   //document.querySelector(".productOptions").classList.remove("optionActive");
});

// for (let i = 1; i < 7; i++) {
//    document.querySelector(`.tab-nav li:nth-child(${i})`).addEventListener("mouseenter", () => {
//       document.querySelectorAll(".tab-stages div").forEach((element, ind) => {
//          document.querySelector(`.tab-stages div`).style.display = "none";
//       });
//       document.querySelector(`.tab-stages div:nth-child(${i})`).style.display = "flex";
//    });
// }

// for (let i = 1; i < 7; i++) {
//    document.querySelector(`.tab-nav li:nth-child(${i})`).addEventListener("mouseeout", () => {
//       document.querySelector(`.tab-stages div:nth-child(${i})`).style.display = "none";
//    });
// }
// navbar fix
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
   fixNavbar();
};

// Get the navbar
var navbar = document.querySelector(".bottomHeader");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixNavbar() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("bottomHeaderSticky");
      document.querySelector(".companyLogo").classList.add("reduceLogosize");
   } else {
      navbar.classList.remove("bottomHeaderSticky");
      document.querySelector(".companyLogo").classList.remove("reduceLogosize");
   }
}
