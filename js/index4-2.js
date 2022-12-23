// Exo 4.2

const heure = prompt("Entrez l'heure svp");
const minute = prompt("Entrez la minute svp");
h = parseInt(heure);
m = parseInt(minute);



if (m == 59) {
    console.log(`Il sera ${h+1} heures 00 minute dans une minute`);
}else if (m>59) {
    console.log("La minute ne doit pas dépasser 59 secondes");
    const nouvelleMinute = prompt("Entrez la minute svp");
    nM = parseInt(nouvelleMinute);
    console.log(`Il sera ${h} heures ${nM+1} minutes dans une minute`);

}else {
console.log(`Il sera ${h} heures ${m+1} minutes dans une minute`);
}