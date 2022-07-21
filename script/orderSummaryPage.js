{
    let count = 0


    function main1() {
        let sub = document.getElementById("subhead1")


        count++

        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
            

        }

    }
}


{
    let count = 0
    function main2() {
        let sub = document.getElementById("subhead2")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main3() {
        let sub = document.getElementById("subhead3")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main4() {
        let sub = document.getElementById("subhead4")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main5() {
        let sub = document.getElementById("subhead5")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main6() {
        let sub = document.getElementById("subhead6")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main7() {
        let sub = document.getElementById("subhead7")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}
{
    let count = 0
    function main8() {
        let sub = document.getElementById("subhead8")

        count++
        if (count % 2 == 0) {
            sub.style.display = "none"
        } else {
            sub.style.display = "block"
        }

    }
}

function couponfun(){
    let value=document.getElementById("coupon-code").value
    let subprice=document.getElementById("subpricechan")
    let grandprice=document.getElementById("grandpricechan")
    if(value=="masai30"){
       subprice.innerText="241.5"
       grandprice.innerText="241.5"
    }else{
        subprice.innerText="345.00"
       grandprice.innerText="345.00"
       alert("Enter a valid Coupon Code...")
    }
}