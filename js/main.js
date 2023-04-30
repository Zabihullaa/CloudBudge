const btn = document.querySelector(".menu");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav__list");
const basket = document.querySelector(".basket");
const baskenavLanguageChooset = document.querySelector(".nav__language-choose");
const navLanguage = document.querySelectorAll(".nav__language");
const login = document.querySelector(".login");
const loginacc = document.querySelector(".loginacc");
const loginacc__img = document.querySelector(".loginacc__img");
const contact_right_input = document.querySelectorAll(".contact-right__input");
const contact_right_btn = document.querySelector(".contact-right-btn");
const login__input = document.querySelectorAll(".login__input");
const login__btn = document.querySelector(".login__btn");

btn.addEventListener("click", () => {
  navList.style.transform = "translateX(0)";
});
close.addEventListener("click", () => {
  navList.style.transform = "translateX(-110%)";
});
basket.addEventListener("click", () => {
  baskenavLanguageChooset.classList.toggle("active");
});
navLanguage.forEach((el) => {
  el.addEventListener("click", () => {
    baskenavLanguageChooset.classList.add("active");
  });
});
login.addEventListener("click", () => {
  loginacc.style.transform = "translateY(0)";
});
loginacc__img.addEventListener("click", () => {
  loginacc.style.transform = "translateY(-110%)";

});

contact_right_input.forEach((item) => {
  contact_right_btn.addEventListener("click", () => {
    item.value = "";
  });
});
login__input.forEach((item) => {
  login__btn.addEventListener("click", () => {
    item.value = "";
    loginacc.style.transform = "translateX(-110%)";
  });
});
