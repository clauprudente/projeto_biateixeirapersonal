function toggleAnimation() {
    let menu = document.getElementById("menu");
    let hamburger = document.querySelector('.containerhamburger .hamburger');
    if (menu.className === "menu") {
        menu.className += " active";
        hamburger.className += " active";
    } else {
        menu.className = "menu";
        hamburger.className = "hamburger"
    }
}

window.onscroll = () => {
    let header = document.querySelector("header");
    if (header.className === "navbar") {
        header.className += ' fundo_roxo';
    }
} 