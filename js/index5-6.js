// EXO5.6

let nombreEntierSaisi;
let somme = 0;
let i;
nombreEntierSaisi = prompt("Entrez un nombre entier");
nombreEntierSaisi = parseInt(nombreEntierSaisi);
for(i = 1; i <= nombreEntierSaisi; i++) {
    // somme = somme + i; 
    somme += i;
}
console.log ("Le resultat est "  + somme);