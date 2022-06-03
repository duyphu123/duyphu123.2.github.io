const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
bar1.addEventListener("click", function () {
  bar1.style.background = "#fff";
  bar2.style.background = "none";
  bar3.style.background = "none";
});
bar2.addEventListener("click", function () {
  bar1.style.background = "none";
  bar2.style.background = "#fff";
  bar3.style.background = "none";
});
bar3.addEventListener("click", function () {
  bar1.style.background = "none";
  bar2.style.background = "none";
  bar3.style.background = "#fff";
});
function formValidate() {
  var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
  var email = document.getElementById("email").value;
  const popupRegister = document.querySelector(".popup-register");
  const overlayOpen=document.querySelector(".overlay")
  const btnRegister2=document.querySelector(".btn-popup-register2")
  if (regExp.test(email)) popupRegister.style.display = "block";
  else alert("Email của bạn không hợp lệ!");
  if (regExp.test(email)) overlayOpen.style.display = "block";
  
  overlayOpen.addEventListener("click", function () {
    popupRegister.style.display = "none";
    
  })
  btnRegister2.addEventListener("click", function () {
    popupRegister.style.display = "none";
    overlayOpen.style.display = "none"
    email=" ";
  })
  
 
}

