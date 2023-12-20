function rm() {
    alert("Read More");
    
}



document.querySelector(".icon").onclick= ()=>{
    // console.log("hii");
    document.querySelector("ul").style.left = 0
    document.querySelector(".fa-close").classList.add("active")
    document.querySelector(".fa-close").style.display = "block"
   
}

document.querySelector(".fa-close").onclick= ()=>{
    // console.log("hello");
    document.querySelector("ul").style.left = "100%"
    document.querySelector(".fa-close").classList.remove("active")
    document.querySelector(".fa-close").style.display = "none"
}

document.addEventListener('scroll',()=>{
    const wrap1 = document.querySelector('.wrap1');
    if(window.scrollY > 80){
       wrap1.classList.add('scrolled');
    }
    else{
        wrap1.classList.remove('scrolled');
    }
});


document.addEventListener('scroll',()=>{
    let x = document.querySelector('.x');
    if(window.scrollY > 80){
       x.classList.add('scrolledspan');
    }
    else{
        x.classList.remove('scrolledspan');
    }
});
document.addEventListener('scroll',()=>{
    let ab = document.querySelector('.ab');
    if(window.scrollY > 80){
       ab.classList.add('scrolledmenu');
    }
    else{
        ab.classList.remove('scrolledmenu');
    }
});