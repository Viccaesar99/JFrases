const menuNav = document.getElementById("menu");
const icons = document.querySelectorAll(".icon");
const iconMenu = document.getElementById("btn-menu");

let iconMenuClass1 = "fa-solid fa-bars";
let iconMenuClass2 = "fa-solid fa-xmark";

iconMenu.addEventListener("click", () => {
  cambiaIcono(iconMenu, iconMenuClass1, iconMenuClass2);
});

let heartClass1 = "icon fa-regular fa-heart";
let heartClass2 = "icon fa-solid fa-heart";

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    cambiaIcono(icon, heartClass1, heartClass2);
  });
});

function cambiaIcono(icon, class1, class2) {
  if (icon.className == `${class1}`) {
    icon.className = `${class2}`;
  } else if (icon.className == `${class2}`) {
    icon.className = `${class1}`;
  }
}

function toggleMenu() {
  menuNav.classList.toggle("menu-aparecer");
}
