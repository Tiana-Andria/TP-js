function SousChaine(chaine,a,b){
    let sous=chaine.slice(a,b);
    return sous;
}
let chaine = "Hello, world!";
let a = 7;
let b = 12;
let resultat = SousChaine(chaine, a, b);
console.log(resultat);