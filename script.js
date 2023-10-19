// window.addEventListener('scroll',()=>{
//     const scroll=window.scrollY
//     if(scroll>400){
//     var nv=document.getElementsByClassName("nav")
//     console.log(nv);
//     nv[0].style.backgroundColor="black"
//     }
// });
window.addEventListener('scroll',()=>{
    const nav=document.querySelector(".nav")
    if(window.scrollY>200){
        nav.classList.add("scrolled")
    }
    else{
        nav.classList.remove("scrolled")
    }
});