// Écrire une fonction qui prend un tableau de chaînes de caractères en entrée et renvoie un tableau contenant uniquement 
// les chaînes de caractères dont la longueur est supérieure à 5.
function superieur(tableau){
    let nouveau=[];
    for(let i=0;i<tableau.length;i++){
        if(tableau[i].length>5){
            nouveau.push(tableau[i])
        }
    }
    return nouveau;
}
console.log(superieur(['rakoto','soa','loulou','bema','solo','kala','gadradraka']))