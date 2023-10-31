let btn = document.querySelector(".backToTop");
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 150){
        btn.classList.add("Click");
    }else{
        btn.classList.remove("Click");
    }
})