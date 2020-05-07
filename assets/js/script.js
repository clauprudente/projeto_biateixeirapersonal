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

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (e) {
        e.preventDefault();
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activequestion");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}