var offset = 500;

var duration = 50;
$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > offset)
$('#top-up').fadeIn(duration);else
$('#top-up').fadeOut(duration);
});
$('#top-up').click(function () {
$('body,html').animate({scrollTop: 0}, duration);
});
});
const menuIconEl = document.querySelector(".menu-icon");

const menuEL = document.querySelector(".nav-list");

menuIconEl.addEventListener("click", function () {
  menuEL.classList.toggle("show");
  overlayOpen.style.display = "block";
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuEL.classList.remove("show");
    overlayOpen.style.display = "none";
  }
});
const overlayOpen = document.querySelector(".overlay");
const cartBtn = document.querySelector(".cart-side .btn-close");
const cartShowOpen = document.querySelector(".cart");
cartShowOpen.addEventListener("click", function () {
    document.querySelector(".cart-side").style.right = "0";
    overlayOpen.style.display = "block";
    
  });
  cartBtn.addEventListener("click", function () {
    document.querySelector(".cart-side").style.right = "-100%";
    overlayOpen.style.display = "none";
  });
  overlayOpen.addEventListener("click", function () {
    menuEL.classList.remove("show");
    overlayOpen.style.display = "none";
   
    document.querySelector(".cart-side").style.right = "-100%";
   
  });