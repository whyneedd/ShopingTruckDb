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