import { topHeader } from "../components/headerComponent.js";

//document.querySelector(".mainHeader").innerHTML = topHeader() + topHeader();

document.querySelector("#ProductMenu").addEventListener("mouseenter", () => {
   document.querySelector(".productOptions").classList.add("active");
});

document.querySelector(".productOptions").addEventListener("mouseleave", () => {
   document.querySelector(".productOptions").classList.remove("active");
   console.log("");
});

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
