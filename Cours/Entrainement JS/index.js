// document.querySelector("h4").style.background ="yellow";
const btn1Q1 = document.querySelector("#btn-1Q1");
const btn2Q1 = document.getElementById("btn-2Q1");
const answerQ1 = document.getElementById("answerQ1");

btn1Q1.addEventListener("click", () => {
  answerQ1.classList.add("show-answerQ1");
  answerQ1.style.background = "red";
});
btn2Q1.addEventListener("click", () => {
  answerQ1.classList.add("show-answerQ1");
  answerQ1.style.background = "green";
});
//--------------------------------------------------------------------------------------

// console.log(mousemoove);
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

// Reste d'autres comme mouseenter, mouseout, mouseover...

//------------------------------------------------------------------------------
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
});

//------------------------------------------------------------------------------------------

const inputName = document.querySelector("#boxInputName");
let inputedName = "";
const langSelectC = document.querySelector("#langSelect");
let language = "";
const formulaire = document.querySelector("form");

//querySelector sur :
// Une class : .devant
// Un id : #devant
// Un élément : RIEN !!

inputName.addEventListener("input", (e) => {
  inputedName = e.target.value;
});

langSelectC.addEventListener("input", (e) => {
  language = e.target.value;
});

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Nom : ${inputedName}</h3>
    <h4>Language préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//------------------------------------------------

//ForEach

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.8)";
  });
});

//-------------------------------------------------------------

//addEventListener Vs onclick

document.body.onclick = function () {
  console.log("Click !");
};
document.body.onscroll = function () {
  console.log("Scroll !");
};

//Pas possible d'attribuer deux commandes sur le même évênement sans addEventListener sinon
//le deuxièle écrase le premier

//----------------------------------------------------------------------------------
