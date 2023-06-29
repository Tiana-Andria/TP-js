//Suite de Pell : Écrivez un algorithme pour générer les termes de la suite de Pell. La suite de Pell est similaire à la suite de Fibonacci, 
//mais chaque terme est le double du terme précédent, plus le terme avant-dernier.
// Les premiers termes de la suite de Pell sont : 0, 1, 2, 5, 12, 29, 70,
function Pell(n){
    let Resultat=[0,1];
    for(let i=2;i<=n;i++){
        Resultat[i]=(2*Resultat[i-1])+Resultat[i-2];
    }
    return Resultat;
}
console.log(Pell(7));