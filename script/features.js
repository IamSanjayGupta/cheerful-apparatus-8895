import { footer, subfooter,subnavbar,topnavbar } from "../components/proto.js";

document.getElementById("sub-footer").innerHTML= subfooter()
document.getElementById("prod-navbar").innerHTML= topnavbar()
document.getElementById("sub-navbar").innerHTML= subnavbar()
document.getElementById("foot").innerHTML= footer()