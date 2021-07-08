const menu = document.querySelector(".menu");
const OpenMenu = document.querySelector(".open-menu");
const CloseMenu = document.querySelector(".close-menu");


function toggleMenu() {
    //La clase aqui se añade sin el punto del selector.
    menu.classList.toggle("menu_opened");
}

OpenMenu.addEventListener("click", toggleMenu);
CloseMenu.addEventListener("click", toggleMenu);


// Quitar menú al darle click.

const menulinks = document.querySelectorAll('.menu a[href^="#"]');

menulinks.forEach(menulinks => {
    menulinks.addEventListener("click", function (){
        menu.classList.remove("menu_opened");
    })
})