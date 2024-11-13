// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const cursor = document.querySelector(".cursor");
const circleOne = document.querySelector(".circle1");
const circleTwo = document.querySelector(".circle2");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.style.transform = "translate(calc(-50% - 5px), calc(-50% - 5px))";
  circleOne.style.left = e.pageX + "px";
  circleOne.style.top = e.pageY + "px";
  circleOne.style.transform = "translate(calc(-50% - 5px), calc(-50% - 5px))";
  circleTwo.style.left = e.pageX + "px";
  circleTwo.style.top = e.pageY + "px";
  circleTwo.style.transform = "translate(calc(-50% - 5px), calc(-50% - 5px))";
});
