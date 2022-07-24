import { topnavbar, subfooter, subnavbar, footer } from "../components/proto.js";

document.getElementById("sub-footer").innerHTML = subfooter();
document.getElementById("prod-navbar").innerHTML = topnavbar();
document.getElementById("sub-navbar").innerHTML = subnavbar();
document.getElementById("foot").innerHTML= footer()

let revert = () => {
   window.location.href = "./download.html";
};

document.getElementById("revert").addEventListener("click", revert);
