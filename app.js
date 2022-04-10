const menu = document.querySelectorAll(".icons");
const burger = document.querySelector(".burger");
const cancel = document.querySelector(".cancel");
const navLink = document.querySelector(".nav-items");

console.log(burger);

menu.forEach((menu) =>
  menu.addEventListener("click", () => {
    cancel.classList.toggle("hide");
  })
);

menu.forEach((menu) =>
  menu.addEventListener("click", () => {
    burger.classList.toggle("hide");
  })
);

menu.forEach((menu) =>
  menu.addEventListener("click", () => {
    navLink.classList.toggle("link-hide");
  })
);
