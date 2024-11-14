// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let previousScroll = 0;
const nav = document.querySelector("nav");

document.addEventListener("scroll", () => {
  console.log("Scroll !");

  if(scrollY > previousScroll) {
    nav.style.top ="-60px";
    previousScroll = scrollY;
    console.log(scrollY);
    } else {
    nav.style.top = "0";
    previousScroll = scrollY;
    console.log(scrollY);
    };
});
