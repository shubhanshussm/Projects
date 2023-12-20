document.querySelector(".menu").addEventListener("click", function () {
   if (document.querySelector("ul").style.left == "100%") {
     document.querySelector("ul").style.left = "50%"
   } else {
    document.querySelector("ul").style.left = "100%"
   }
})