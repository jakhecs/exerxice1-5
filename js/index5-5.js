// EXO5.5 
let nombreEntierSaisi;
let i = 1;
nombreEntierSaisi = prompt("Entrez un nombre entier");
nombreEntierSaisi = parseInt(nombreEntierSaisi);
for(i = 1; i <= 10; i++) {
    console.log (nombreEntierSaisi + " X " + i + " = " + nombreEntierSaisi*i);
}

while(i <= 10) {
    console.log (nombreEntierSaisi + " X " + i + " = " + nombreEntierSaisi*i);
    i = i + 1;
}
