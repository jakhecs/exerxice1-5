// Exo 4.3

let heure = prompt("Entrez l'heure s'il vous plaît");
let minute = prompt("Entrez la minute s'il vous plaît");
let seconde = prompt("Entrez la saconde s'il vous plaît");

heure = parseInt(heure);
minute = parseInt(minute);
seconde = parseInt(seconde);

if ( seconde >= 59) {
    seconde = 0;
    minute = minute + 1;
} else {
    seconde = seconde + 1;
}
if (minute >= 59){
    minute = 0;
    heure = heure + 1;
}
if (heure >= 24) {
    heure = 0;
}
console.log(`Il sera ${heure} heures ${minute} minutes ${seconde} secondes`);