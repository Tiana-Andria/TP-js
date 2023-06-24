function nombrePropriete(objet){
   let propriete=Object.keys(objet);
   let nombre=propriete.length;
   return propriete;
}
let objet={
    a:'a',
    b:'b',
}
console.log(nombrePropriete(objet));