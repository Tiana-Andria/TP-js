//Recherche du plus grand sous-tableau croissant : Écrivez un algorithme qui trouve le plus grand sous-tableau croissant 
//dans un tableau d'entiers donné. Par exemple, pour le tableau [2, 3, 1, 5, 6, 4, 8, 9], le résultat devrait être [1, 5, 6, 8, 9].
function PlusGrand(tableau) {
    let grand = [1];
    let plusGrand = [tableau[0]];
  
    for (let i = 2; i <tableau.length; i++) {
      if (tableau[i] > tableau[i - 1]) {
        grand.push(tableau[i]);
      } 
      else{
        grand=grand;
      }
  
      if (grand.length > plusGrand.length) {
       plusGrand= grand1;
      }
    }
  
    return plusGrand;
  }
  console.log(PlusGrand([2,3,1,5,6,4,8,9]));
  