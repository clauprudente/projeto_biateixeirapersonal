function toggleAnimation() {
    let menu = document.getElementById("menu");
    let hamburger = document.querySelector('.containerhamburger .hamburger');
    if (menu.className === "menu") {
        menu.className += " active";
        document.querySelector('html').className = "menu-active"
        hamburger.className += " active";
    } else {
        menu.className = "menu";
        document.querySelector('html').className = ""
        hamburger.className = "hamburger"
    }
} 