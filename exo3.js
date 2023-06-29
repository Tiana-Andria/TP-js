//Recherche du maximum et du minimum : Écrivez un algorithme qui trouve à la fois le maximum et le minimum dans un tableau donné. Par exemple,
//pour le tableau [4, 9, 2, 7, 5, 1], le résultat devrait être le maximum 9 et le minimum 1.
function rechercherMinMax(tableau){
    let min=0;
    let max=0;

    for(let i=0; i<tableau.length;i++){
        if(tableau[i]<=min){
            min=tableau[i];
        }
    }
    for(let j=0;j<tableau.length;j++){
        if(tableau[j]>=max){
            max= tableau[j];
        }
    }
    return "le minimum est " + min + ", le maximum est " + max;
}
console.log(rechercherMinMax([1,2,3,4,6,5,7,0]));