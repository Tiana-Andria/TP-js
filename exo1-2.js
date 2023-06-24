//renvoie un tableau contenant les chaines separement
function separer(chaine){
    let tableau=chaine.split(' ');
    return tableau;
}
//inverser l'ordre des caracteres
function inverser(chaine){
    let inverse=chaine.split(' ').reverse().join(' ');
    return inverse;
}
console.log(separer("Bonjour daholo"));
console.log(inverser("Bonjour daholo"));