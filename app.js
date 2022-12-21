const btn = document.querySelector(".btn");
const links = document.querySelector(".nav-links-ul");


btn.addEventListener("click", function() {
    if(links.classList.contains("show-links")) {
        links.classList.remove("show-links");
        links.classList.add("hide-links");
    } else {
        links.classList.remove("hide-links");
        links.classList.add("show-links");
    }
});