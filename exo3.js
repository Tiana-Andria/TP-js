function valeur(objet){
    let propriete=Object.values(objet);
    return propriete;
}
console.log(valeur(obj={a:1,b:2,c:3}))