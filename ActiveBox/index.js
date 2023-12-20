document.querySelector(".menu").addEventListener("click", function () {
    if (document.querySelector("ul").style.left == "100%") {
        document.querySelector("ul").style.left = "40%";
        document.querySelector(".p").style.transform = "rotateZ(45deg)";
        document.querySelector(".q").style.display = "none";
        document.querySelector(".r").style.transform = "rotateZ(-45deg)";
        document.querySelector(".p").style.marginBottom = "-4px";
    } else {
       document.querySelector("ul").style.left ="100%";
       document.querySelector(".p").style.transform = "rotateZ(0deg)";
        document.querySelector(".q").style.display = "inline-block";
        document.querySelector(".r").style.transform = "rotateZ(0deg)";
        document.querySelector(".p").style.marginBottom = "3px";
        document.querySelector(".q").style.zIndex = "1";
    }
})


document.querySelector(".v").addEventListener("click",function () {
    document.querySelector(".one").style.display ="block";
    document.querySelector(".two").style.display ="none";
    document.querySelector(".three").style.display ="none";
    document.querySelector(".four").style.display ="none";
    document.querySelector(".five").style.display ="none";
    document.querySelector(".v").style.backgroundColor ="#fff"
    document.querySelector(".w").style.backgroundColor ="#cbccd367"
    document.querySelector(".x").style.backgroundColor ="#cbccd367"
    document.querySelector(".y").style.backgroundColor ="#cbccd367"
    document.querySelector(".z").style.backgroundColor ="#cbccd367"
   
})
document.querySelector(".w").addEventListener("click",function () {
    document.querySelector(".one").style.display ="none";
    document.querySelector(".two").style.display ="block";
    document.querySelector(".three").style.display ="none";
    document.querySelector(".four").style.display ="none";
    document.querySelector(".five").style.display ="none";
    document.querySelector(".v").style.backgroundColor ="#cbccd367"
    document.querySelector(".w").style.backgroundColor ="#fff"
    document.querySelector(".x").style.backgroundColor ="#cbccd367"
    document.querySelector(".y").style.backgroundColor ="#cbccd367"
    document.querySelector(".z").style.backgroundColor ="#cbccd367"
})
document.querySelector(".x").addEventListener("click",function () {
    document.querySelector(".one").style.display ="none";
    document.querySelector(".two").style.display ="none";
    document.querySelector(".three").style.display ="block";
    document.querySelector(".four").style.display ="none";
    document.querySelector(".five").style.display ="none";
    document.querySelector(".v").style.backgroundColor ="#cbccd367"
    document.querySelector(".w").style.backgroundColor ="#cbccd367"
    document.querySelector(".x").style.backgroundColor ="#fff"
    document.querySelector(".y").style.backgroundColor ="#cbccd367"
    document.querySelector(".z").style.backgroundColor ="#cbccd367"
})
document.querySelector(".y").addEventListener("click",function () {
    document.querySelector(".one").style.display ="none";
    document.querySelector(".two").style.display ="none";
    document.querySelector(".three").style.display ="none";
    document.querySelector(".four").style.display ="block";
    document.querySelector(".five").style.display ="none";
    document.querySelector(".v").style.backgroundColor ="#cbccd367"
    document.querySelector(".w").style.backgroundColor ="#cbccd367"
    document.querySelector(".x").style.backgroundColor ="#cbccd367"
    document.querySelector(".y").style.backgroundColor ="#fff"
    document.querySelector(".z").style.backgroundColor ="#cbccd367"
})
document.querySelector(".z").addEventListener("click",function () {
    document.querySelector(".one").style.display ="none";
    document.querySelector(".two").style.display ="none";
    document.querySelector(".three").style.display ="none";
    document.querySelector(".four").style.display ="none";
    document.querySelector(".five").style.display ="block";
    document.querySelector(".v").style.backgroundColor ="#cbccd367"
    document.querySelector(".w").style.backgroundColor ="#cbccd367"
    document.querySelector(".x").style.backgroundColor ="#cbccd367"
    document.querySelector(".y").style.backgroundColor ="#cbccd367"
    document.querySelector(".z").style.backgroundColor ="#fff"
})

// document.querySelector(.menu).addEventListener("click",function () {
//     document.querySelector()
// })
