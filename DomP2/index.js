//  Selecteurs

// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// crée ses const et var en debut de document
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");

// toujours verifier avec un console log
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  answer.classList.add("show-response");
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  answer.classList.add("show-response");
  answer.style.background = "red";
});

// ------------------------------------------------------------------------------------

// Mouse Events

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

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,25,36,0.5)";
});

// Quand on sort de l'élément
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "red";
});

// Quand l'element est survolé
answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
});

// -------------------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

// Pour aller chercher le son en fonction de la touche selectionner ( key + .mp3 pour z = z.mp3)
// nous pourrons avoir 20fichiers avec des lettre differente et selectionner
// le bon en appuyant juste sur la touche
// const ring = (key) => {
//   const audio = new Audio();
//   audio.src = key + ".mp3";
//   audio.play();
// };

// Toujours selectionner le document
document.addEventListener("keypress", (e) => {
  // textContent pour faire apparaitre le texte demandé ( dans ce cas la lettre ou l'on appuye)
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.color = "red";
  } else if (e.key === "k") {
    keypressContainer.style.color = "blue";
  } else {
    keypressContainer.style.color = "green";
  }

  ring();
});

// --------------------------------------------------------------------
// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// --------------------------------------------------------------------
// Form events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // permet d'annuler l'actualisation de la page lors de la validation e.preventDefault()

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseuso : ${pseudo} </h3>
    <h4>Langage préféré : ${language} </h4>
    `;
    // innerHTML pour crée HTML via javascript
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// --------------------------------------------------
// Load Event

window.addEventListener("load", () => {
  console.log("document chargé !");
});

// --------------------------------------------------
// ForEach

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// --------------------------------------------------------------------
// addEventListener Vs onclick

// document.body.onclick = function () {
//   console.log("scroll !!");
// };

// Bubbling fin ( de base eventlistener est parametré en mode Bubling)

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

// -------------------------------------------------------------
// Stop propagation

questionContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

// removeEventListener

// -------------------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close();

// Evénement adossés a window

// alert("Test");

// Confirm

btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let response = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo " + response + "</h3>";
});

// seTimeout

// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
//   // logique a executé
//   // 2000 = milliseconds
// }, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class ='box'>
//     <h2> Nouvelle Boite ! </h2>
//   </div>
//   `;
// }, 10000);

document.body.addEventListener("click", () => {
  clearInterval(interval);
});

// Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator

// console.log(navigator.userAgent);
// navigator.geolocation.getCurrentPosition(success, error, options);

//  History
// window.history.back(); permet de revenir en arriere
// history.go (-2); reviens autant de page en arriere
// console.log(history);

// -------------------------------------------------------
// setProperty

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
