// Développement limité de (1 + x)^n : Écrivez une fonction en JavaScript qui calcule le développement
// limité de (1 + x)^n autour de zéro en utilisant la formule :
// (1 + x)^n ≈ 1 + nx + n(n-1)x^2/2! + n(n-1)(n-2)x^3/3! + n(n-1)(n-2)(n-3)x^4/4! + n(n-1)(n-2)(n-3)(n-4)x^5/5!
//  + n(n-1)(n-2)(n-3)(n-4)(n-5)x^6/6!
function produit(n, i) {
    let prod = 1;
    for (let j = 0; j < i; j++) {
      prod *= (n - j);
    }
    return prod;
  }
  
  function DL(x, n) {
    let resultat = 1;
    for (let i = 1; i <= n; i++) {
      let terme = (produit(n, i) * Math.pow(x, i)) / factorielle(i);
      resultat += terme;
    }
    return resultat;
  }
  
  function factorielle(nombre) {
    let resultat = 1;
    for (let i = 1; i <= nombre; i++) {
      resultat *= i;
    }
    return resultat;
  }
  
  