// Exo 4.1

let tutu = parseInt(prompt("Entrez un nombre"));
let toto = parseInt(prompt("Entrez un nombre"));
let tata = prompt("Entrez un mot");

if (tutu > toto + 4 || tata === "ok") {
    tutu = tutu + 1;
} else {
    tutu = tutu - 1;
};

console.log(tutu);
