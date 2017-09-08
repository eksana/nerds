var link = document.querySelector(".footer-contacts-button");
var stoplink = document.querySelector(".modal-page");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".modal-close");
var username = popup.querySelector("#contact-us-username");
var email = popup.querySelector("#contact-us-email");
var form = popup.querySelector("contact-form");
var storage = localStorage.getItem("username");




link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
   } else {
     localStorage.setItem("username", username.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
