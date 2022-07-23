import {subfooter,subnavbar,topnavbar } from "../components/proto.js";

document.getElementById("sub-footer").innerHTML= subfooter()
document.getElementById("prod-navbar").innerHTML= topnavbar()
document.getElementById("sub-navbar").innerHTML= subnavbar()


let alertDownload= ()=>{

    alert("Your file is Downloading, Please install after Completion")
}

document.getElementById("downloader").addEventListener("click", alertDownload)

