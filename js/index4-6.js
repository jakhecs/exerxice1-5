// Exo 4.6 Election

const scoreCandidat1 = parseInt(prompt("Entrez le score du premier candidat."));
const scoreCandidat2 = parseInt(prompt("Entrez le score du second candidat."));
const scoreCandidat3 = parseInt(prompt("Entrez le score du troisieme candidat."));
const scoreCandidat4 = parseInt(prompt("Entrez le score du quatrieme candidat."));

if (scoreCandidat1 >= 50) {
    console.log("Candidat numéro 1 vous êtes élus. Félicitations!!!");
} else if(scoreCandidat1 >= 12.5 && scoreCandidat1 > scoreCandidat2 && scoreCandidat1 > scoreCandidat3 && scoreCandidat1 > scoreCandidat4) {
    console.log("Candidat numéro 1 vous êtes en ballotage favorable.");
} else if (scoreCandidat1 >= 12.5) {
    console.log("Candidat numéro 1 vous êtes en ballotage défavorable.");
} else {
    console.log("Candidat numéro 1 vous avez perdu.");
}