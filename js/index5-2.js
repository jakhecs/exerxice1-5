// EXO5.2
let nombreEntierSaisi = 0

while((nombreEntierSaisi < 10 || nombreEntierSaisi > 20)){

    nombreEntierSaisi = prompt("Entrez un nombre entier entre 10 et 20");
    
    if(nombreEntierSaisi <= 10) {
        console.log("Plus grand!");
    }else if(nombreEntierSaisi >= 20) {
        console.log("Plus petit");
    }
    
}