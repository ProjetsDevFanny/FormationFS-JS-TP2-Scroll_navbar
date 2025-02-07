// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre, et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
// faire un if/else si on sort ou pas la navbar

// -----------------------------------------------------------------------------------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // window.scrollY = Pour savoir le nb de pixels qu'a fait le scroll
  if (window.scrollY > 700) {
    nav.style.top = "-60px";
  } else {
    nav.style.top = 0;
  }
});
