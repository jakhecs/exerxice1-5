// EXO5.7

let nombreEntierSaisi;
let produit = 1;
let i;
nombreEntierSaisi = prompt ("Entrez un nombre entier")
nombreEntierSaisi = parseInt(nombreEntierSaisi);
for(i = nombreEntierSaisi; i >= 1; i--) {
    produit = produit * i ;
}
console.log (`la factorielle de ${nombreEntierSaisi} est ${produit}`);