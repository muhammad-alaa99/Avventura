// ================ slider ====================================
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

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
