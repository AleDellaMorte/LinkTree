/*-----Scroll-----*/
window.addEventListener("scroll", () => {
    let head = document.querySelector(".head");
    let screenPos = window.scrollY;
    if (screenPos > 0) {
        head.classList.add("scrolled");
    } else {
        head.classList.remove("scrolled");
    }
});

/*-----Checkbox-----*/
let checkbox = document.getElementById("socials");
let listCont = document.querySelector(".listCont");
checkbox.checked = false;

checkbox.addEventListener('change', function() {
    if (this.checked) {
        listCont.classList.add("opened");
    } else {
        listCont.classList.remove("opened");
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
    window.location.href = "https://youtu.be/Z5NoQg8LdDk";
}
