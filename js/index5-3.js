// EXO5.3


let nombreEntierSaisi;
let nombreDarret;
nombreEntierSaisi = prompt("Entrez un nombre" );
let nombreEntierConverti = parseInt(nombreEntierSaisi);
nombreDarret = (nombreEntierConverti + 10);
while(nombreEntierConverti < nombreDarret) {
    console.log(nombreEntierConverti + 1);
    nombreEntierConverti++
}