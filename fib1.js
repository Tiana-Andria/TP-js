//calcul n premiers terme de la suite de fibonacci et les renvoie sous forme de tableau
function termeFib(n){
    let tableau=[0,1];
    for(let i=2;i<=n;i++){
        tableau[i]=tableau[i-2]+tableau[i-1];
    }
    return tableau;
}
console.log(termeFib(10));