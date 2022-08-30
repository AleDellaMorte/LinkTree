window.addEventListener("scroll", () => {
    let head = document.querySelector(".head");
    let screenPos = window.scrollY;
    if (screenPos > 0) {
        head.classList.add("scrolled");
    } else {
        head.classList.remove("scrolled");
    }
});
