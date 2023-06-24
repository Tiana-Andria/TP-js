//calcul approximation du DL de sin(x) autour de 0
//sin(x)= x -x^3/3! +x^5/5! - x^7/7!+x^9/9!-x^11/11!
function approximation(x, n) {
    let res = x;
    for (let i = 1; i <= n; i=i+2) {
        let terme = Math.pow(-1, i)*(Math.pow(x,(2*i)+1)/factorielle((2*i)+1));
        res += terme;
    }
    return res;
}
function factorielle(nombre) {
    let resultat = 1;
    for (let i = 1; i <= nombre; i++) {
        resultat *= i;
    }
    return resultat;
}

console.log(approximation(3, 2));
