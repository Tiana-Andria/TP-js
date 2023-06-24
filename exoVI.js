function factorielle(nombre){
    let resultat=1;
    for(let i=1;i<=nombre;i++){
        resultat*=i;
    }
    return resultat;
}
console.log(factorielle(2));