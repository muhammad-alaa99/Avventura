// =====================================

let  header = document.querySelector("header");
let sectionTop = document.querySelector(".top");
// console.log(sectionTop)
window.addEventListener("scroll",(e)=>{
  if(window.scrollY >= 30){
    header.style.display="block";
    sectionTop.style.display="none";
  }else{
    header.style.display="none";
    sectionTop.style.display="block";
  }
});
// ============================ subscrib ===================
let  sub = document.querySelector(".sub-info");
let  btnSub = document.querySelector(".top .sub a");
let  close = document.querySelector(".sub-info .close");
btnSub.addEventListener("click",(e)=>{
  sub.classList.toggle("toggle");
});
window.addEventListener("scroll",(e)=>{
  if(sub.classList.contains("toggle")){
    sub.classList.remove("toggle");
  }
});

close.addEventListener("click",(e)=>{
  if(sub.classList.contains("toggle")){
    sub.classList.remove("toggle");
  }
});
