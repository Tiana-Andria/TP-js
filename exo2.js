//Comptage des éléments : Écrivez un algorithme qui compte le nombre d'éléments distincts dans un tableau donné. 
//Par exemple, pour le tableau [1, 2, 3, 2, 4, 1, 5], le résultat devrait être 5.
function Compter(tableau){
   let tab=new Set(tableau);
   return tab.size;
}
console.log(Compter([1, 2, 3, 2, 4, 1, 5]));