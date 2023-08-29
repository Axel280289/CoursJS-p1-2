console.log("coucou");

let maVariable = "hello";

console.log(maVariable);

// **Les Variables**
let unTexte = "voici un texte";
console.log(unTexte);

//  Const = ne peut pas etre modifié
const prenom = "Justine";
console.log(prenom);

// Let = La variable peut évoluer
let unChiffre = 24;

unChiffre = 22;
console.log(unChiffre);

// Concaténation
let chaine = "Je suis une chaine de caractères";

let nouvelleChaine = "Chaine précédente : " + chaine;
console.log(nouvelleChaine);

// Concaténation avec guillemets altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}`;
console.log(autreConcatenation);

// ** Types de Données **

let string = "Je suis une chaine de caractères";
let number = 24;
let boolean = false;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

// ** Les Opérateurs **
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
// Puissance
console.log(4 ** 5);

// ** Opérateurs d'affectations **
let total = 0;

total = total + 1;
total++;

//  ajoute directement la valeur demandé
total += 5;
total -= 5;
total *= 3;
console.log(total);

// ** Structure de controle **

let x = 2;
let y = 2;

// if (x > y) {
//   alert("Yes x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("ILS SONT EGAUX");
// }

//  on teste si la variable est "true"
if (x) {
  // console.log("x existe !");
}

// === test l'égalité en type et contenu
if (x === y) {
  console.log("ils sont égaux");
} else {
  console.log("pas égaux !");
}
let a = 2;
let b = "2";

// == teste l'égalité de valeur sans prendre en compte le type
if (a == b) {
  console.log("ils sont égaux");
} else {
  console.log("pas égaux !");
}

//  || ou
//  && et

// soit l'un sois l'autre
if (x > y || x > 1) {
  console.log("Oui");
}

// && il faut que toutes les conditions soit réunies
if (x > y && x > 1) {
  console.log("OUI");
}

// **  les fonctions **

// fonction classique( a l'ancienne)
function faireQuelquesChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("calcule terminé !");
}
// il faut impérativement appeler la fonction pour qu'elle se joue
//  appel de la fonction : faireQuelquesChose();

// fonction flêchée

const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(2, 578555);

// ** la portée des variables **

function add2() {
  let num = 4;
  console.log(num + 2);
}
