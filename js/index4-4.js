// Exo 4.4

const nombrePhotocopie = parseInt(prompt("Entrez le nombre de photocopie(s) effectué(es)"))
let prix;
prix = parseInt(prix)


if (nombrePhotocopie <=10) {
    prix = nombrePhotocopie * 0.10
}

if (nombrePhotocopie <=30) {
    prix = (10 * 0.10) + ((nombrePhotocopie - 10) * 0.09)
}

if (nombrePhotocopie >30) {
    prix = (10 * 0.10) + (20 * 0.09) + ((nombrePhotocopie - 30) * 0.09)
}

console.log(`Votre facture fait ${prix} £`);
