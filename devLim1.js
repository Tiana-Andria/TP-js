//calculer approximation du developpement limite de expo(x)
//expo(x)=1+x/1!+x^2/2!+....
function approximation(x, n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      let terme = Math.pow(x, i) / factorielle(i);
      res += terme;
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