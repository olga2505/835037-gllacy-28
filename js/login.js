var loginEmail = document.querySelector(".login__input--email");
var loginPassword = document.querySelector(".login__input--password");
var modalLogin = document.querySelector(".modal__login");

loginEmail.addEventListener("focus", function() {
  modalLogin.classList.add("modal-show__modal-login");
})

loginPassword.addEventListener("focus", function() {
  modalLogin.classList.add("modal-show__modal-login");
})

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-show__modal-login");
  }
})
