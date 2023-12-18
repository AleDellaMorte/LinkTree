window.addEventListener("scroll", () => {
    let head = document.querySelector(".head");
    let screenPos = window.scrollY;
    if (screenPos > 0) {
        head.classList.add("scrolled");
    } else {
        head.classList.remove("scrolled");
    }
});

/*-----KonamiCode-----*/
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
var konamiPos = 0;
  
document.addEventListener('keydown', function(e) {
    var key = e.key;
    var requiredKey = konamiCode[konamiPos];
    if (key === requiredKey) {
        konamiPos++;
        if (konamiPos === konamiCode.length) {
        easterEgg();
        konamiPos = 0;
        }
    } else {
        konamiPos = 0;
    }
    });
  
function easterEgg() {
    window.location.href = "https://youtu.be/1JNmz17gnMw";
}
