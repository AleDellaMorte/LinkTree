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
const mal_api = "https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=ce9d6486c30c9e4efc3ac96baccd1d6d&code_challenge=75eGC-9ar46ZQCW0ci98ZAmI0uM5A3AJGa3wPFdE5uyFAy1GLsTokmEdtbYBUX5gD4XMTyoFUC1XZsDWyrxHpcvD6vsQaMKlH3hWiXoh9tbq9XP-C8Em3g1BBep5TdkC&state=RequestID42";
async function logMovies() {
    const response = await fetch(mal_api);
    const movies = await response.json();
    console.log(movies);
  }
