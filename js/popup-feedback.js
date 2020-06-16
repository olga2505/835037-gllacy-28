var buttonFeedback = document.querySelector(".address__feedback-btn");
var modalFeedback = document.querySelector(".popup__feedback");
var modalClose = document.querySelector(".feedback__close");
var modalForm = document.querySelector(".feedback__form");
var modalName = document.querySelector('.feedback__input--name');
var modalEmail = document.querySelector(".feedback__input--email");
var modalText = document.querySelector(".feedback__input--text");

buttonFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  modalName.focus();
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
  if(!modalName.value || !modalEmail.value || !modalText.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

