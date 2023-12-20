document.querySelector(".menu").addEventListener("click", function () {
    if (document.querySelector("ul").style.left =="100%") {
        document.querySelector("ul").style.left = 0
        document.querySelector(".x").style.transform ="rotateZ(45deg)"
        document.querySelector(".y").style.display ="none"
        document.querySelector(".z").style.transform ="rotateZ(-45deg)"
        document.querySelector(".x").style.marginBottom ="-5px"
        document.querySelector(".x").style.backgroundColor ="#000"
        document.querySelector(".z").style.backgroundColor ="#000"
    } else {
        document.querySelector("ul").style.left ="100%"
        document.querySelector(".x").style.transform ="rotateZ(0deg)"
        document.querySelector(".y").style.display ="inline-block"
        document.querySelector(".z").style.transform ="rotateZ(0deg)"
        document.querySelector(".x").style.marginBottom ="3px"
        document.querySelector(".x").style.backgroundColor ="#fff"
        document.querySelector(".z").style.backgroundColor ="#fff"
    }
})