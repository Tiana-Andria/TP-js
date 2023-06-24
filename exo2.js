function cles(objet){
    let tableau=Object.keys(objet);
    return tableau;
}
console.log(cles(obj={a:'a',b:1,c:2}))