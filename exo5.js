//Développement limité de la fonction exponentielle : Écrivez un algorithme qui 
//calcule une approximation de la fonction exponentielle en utilisant le développement limité de Maclaurin. 
//Le développement limité de Maclaurin de la fonction exponentielle est donné par : e^x = 1 + x + (x^2 / 2!) + (x^3 / 3!) + (x^4 / 4!) + ...
function DL(x,n){
    let res=1;
    for(let i=1;i<n;i++){
        res+=Math.pow(x,i)/factorielle (i);

    }
    return res;
}
function factorielle(nombre){
    let resultat=1;
    for(let i=1;i<=nombre;i++){
        resultat*=i;
    }
    return resultat;
}

console.log(DL(2,3));