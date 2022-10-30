let active = false;
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-navigation");
const hero = document.querySelector(".hero");
burger.addEventListener("click", () => {
  console.log("hello");
  active = !active;
  if (active === true) {
    menu.classList.add("show");
    hero.classList.add("hide");
  } else {
    menu.classList.remove("show");
    hero.classList.remove("hide");
  }
});
