function verifierPair(nombre){
    let pair=false;
    if(nombre%2===0){
        pair=true;
    }
    return pair;
}
console.log(verifierPair(31));