// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre, et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll = (window.scrollY) = (Pour savoir le nb de pixels qu'a fait le scroll)

// faire un if/else si on sort ou pas la navbar

// -----------------------------------------------------------------------------------------------------

// Mauvaise méthode = qui remonte seulement à une valeur de Scroll = pas synchonisé avec le mouvement du scroll
// const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {

//   if (window.scrollY > 900) {
//     nav.style.top = "-70px";
//   } else {
//     nav.style.top = 0;
//   }
// });

// Autre façon de faire:

lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-70px";
  }
  lastScroll = window.scrollY;
});

// Explication ligne par ligne par ChatGPT :

//     lastScroll = 0;
//     → Cette variable stocke la dernière position de défilement verticale de la page (en pixels).

//     window.addEventListener("scroll", () => { ... });
//     → On écoute l'événement "scroll", c'est-à-dire chaque fois que l'utilisateur fait défiler la page.

//     if (window.scrollY < lastScroll) {
//     → window.scrollY représente la position verticale actuelle de la page.
//     → Si la nouvelle position (window.scrollY) est inférieure à la précédente (lastScroll), cela signifie que l'utilisateur fait défiler vers le haut.

//     navbar.style.top = 0;
//     → Si on fait défiler vers le haut, la barre de navigation (navbar) est réaffichée en la positionnant à top: 0 (visible en haut de la page).

//     } else { navbar.style.top = "-70px"; }
//     → Sinon, cela signifie que l'utilisateur fait défiler vers le bas, donc on cache la barre de navigation en lui attribuant top: -70px (elle sort de l’écran vers le haut).

//     lastScroll = window.scrollY;
//     → On met à jour lastScroll avec la nouvelle position de défilement pour que la prochaine vérification puisse comparer avec la nouvelle valeur.

// Ce que fait ce code

// 🔹 Quand on fait défiler vers le bas, la navbar disparaît (-70px).
// 🔹 Quand on fait défiler vers le haut, la navbar réapparaît (0px).

// C'est une technique courante pour masquer la barre de navigation lors du scroll vers le bas et la réafficher lorsqu'on remonte pour améliorer la lisibilité de la page.
