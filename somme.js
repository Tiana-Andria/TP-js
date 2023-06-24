//calculer somme des chiffre d'un nombre
function calculeSomme(nombre){
    let detail=nombre.split();
    let somme=0;
    for(let i=0;i<detail.length;i++){
        somme+=detail[i];
    }
    return somme;
}