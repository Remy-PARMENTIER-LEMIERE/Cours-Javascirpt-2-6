// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const popup = document.querySelector("#popup");

window.addEventListener("scroll", (e) => {

const navbar = document.querySelector("#navbar");
let scrollValue = window.scrollY;

  if(scrollValue == 0) {
    navbar.style.height = "90px";
    } else {
    navbar.style.height = "45px";
    }

const imgImprovise = document.querySelector("#imgImprovise");

  if(scrollValue >= 280) {
    imgImprovise.style.transform = "translateX(0)";
    imgImprovise.style.opacity = "1";
    }

  if(scrollValue >= 1100) {
    popup.style.transform = "translateX(0)";
    popup.style.opacity = "1";
    }
});

window.addEventListener("click", (e) => {

const closeBtn = document.querySelector("#closeBtn");

  if(closeBtn == e.target) {
    popup.style.transform = "translateX(400px)";
    popup.style.opacity = "0";
    setTimeout(() => {
      popup.remove();
      }, "1000");
  }

});