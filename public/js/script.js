const menu = document.getElementsByClassName("menu-btn")[0];
const nav = document.getElementsByClassName("nav")[0];

menu.addEventListener("click", function () {
    menu.classList.toggle("open");
    // nav.classList.toggle("hidden")
    nav.classList.toggle("nav-show")
})