// Exo 4.5 Impot <>)

const age = parseInt(prompt("Entrez votre age svp."));
const sexe = prompt("Vous êtes une homme ou une femme?");
let femme = "femme";
let homme = "homme";

if ((age > 20 && sexe === homme) || (age >= 18 && sexe === femme) || (age <= 35 && sexe === femme)) {
    console.log("Vous êtes imposable");   
} else {
    console.log("Vous n'êtes pas imposable");   
}