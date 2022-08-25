// Make home section active by default
// noinspection JSDeprecatedSymbols

let home = document.querySelector("nav a");
home.classList.add("active");

window.onscroll = () => {
    let current = "";

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        let header = $("header");
        let headerMarginTop = parseInt(header.css('margin-top'));
        let headerHeight = header.outerHeight();

        if (sectionTop - pageYOffset <= headerHeight) {
            current = section.getAttribute("id");
        }
        if (pageYOffset <= headerMarginTop) {
            current = "home";
        }
    });


    const links = document.querySelectorAll("nav a");
    links.forEach((element) => {
        element.classList.remove("active");
        if (element.classList.contains(current)) {
            element.classList.add("active");
        }
    });
};


let hamburger_menu = document.querySelector('.hamburger-menu-wrapper')
hamburger_menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    $('nav').toggleClass('open');
}
