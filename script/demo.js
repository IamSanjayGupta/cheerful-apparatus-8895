import {subfooter,subnavbar,topnavbar } from "../components/proto.js";

document.getElementById("sub-footer").innerHTML= subfooter()
document.getElementById("prod-navbar").innerHTML= topnavbar()
document.getElementById("sub-navbar").innerHTML= subnavbar()


let Submitform= (event)=>{
    event.preventDefault()


    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let number= document.getElementById("number").value;
    let date= document.getElementById("date").value;
    let req= document.getElementById("req").value;
    let country= document.getElementById("country").value;

    // console.log(name);

    if(name.length > 5 && email.length > 5 && number.length > 5 && req.length>5 ) alert(" Your Request for the Demo is approved we will reach to you Soon !")
    else alert("Please Enter the input fields")
}




document.getElementById("form").addEventListener("submit", function(){
    Submitform(event)
})