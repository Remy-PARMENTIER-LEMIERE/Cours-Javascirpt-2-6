// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

let opennedSidebar = false;
const sidebar = document.getElementById("side-bar");
const main = document.querySelector(".content");

btn.addEventListener("click", (e) => {
  if (opennedSidebar === false) {
    sidebar.style.left = "0";
    opennedSidebar = true;
    main.style.filter = "blur(3px)";
  } else {
    sidebar.style.left = "-230px";
    opennedSidebar = false;
    main.style.filter = "blur(0)";
  }
});

document.addEventListener("click", function (event) {
  var isClickInside = document
    .getElementById("side-bar")
    .contains(event.target);
  if (!isClickInside) {
    sidebar.style.left = "-230px";
    opennedSidebar = false;
    main.style.filter = "blur(0)";
  }
});
// document.getElementById("menuhead").addEventListener("click", function () {
//   document.getElementById("menuscontainer").style.display = "block";
// });
