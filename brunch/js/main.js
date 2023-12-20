document.querySelector(".icon").onclick= ()=>{
    // console.log("hii");
    document.querySelector("ul").style.left = "50%"
    document.querySelector(".fa-close").classList.add("active")
    document.querySelector(".fa-close").style.display = "block"
   
}

document.querySelector(".fa-close").onclick= ()=>{
    // console.log("hello");
    document.querySelector("ul").style.left = "100%"
    document.querySelector(".fa-close").classList.remove("active")
    document.querySelector(".fa-close").style.display = "none"
}