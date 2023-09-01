const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
const productButton = document.querySelector(".buyButton");
const productButton1 = document.querySelector(".buyButton1");
const productButton2 = document.querySelector(".buyButton2");
const productButton3 = document.querySelector(".buyButton3");
const productButton4 = document.querySelector(".buyButton4");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
productButton1.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton2.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton3.addEventListener("click", () => {
  payment.style.display = "flex";
});
productButton4.addEventListener("click", () => {
  payment.style.display = "flex";
});
