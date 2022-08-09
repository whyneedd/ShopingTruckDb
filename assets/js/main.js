 function removeactivelink() {
    var link = document.querySelector(".nav__menu");
    var btn = document.querySelector(".nav__link");

    link.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav__link")) {

            link.querySelector(".active").classList.remove("active");

            e.target.classList.add("active");

        }
    })
 }
 removeactivelink();

function MenuToggle() {
    var humb = document.querySelector(".nav__humbger");
    var menu = document.querySelector(".nav__list");

    humb.addEventListener("click", () => {
            humb.classList.toggle("active");
            menu.classList.toggle("active");
        })
}
MenuToggle();