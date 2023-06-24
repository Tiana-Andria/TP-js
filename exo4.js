// Écrire une fonction qui prend une chaîne de caractères en entrée et renvoie le nombre de mots présents dans la chaîne
function mot(chaine){
    let c=chaine.split(' ');
    let nombre=c.length;
    return nombre;
}
console.log(mot("carlo toupa ngoli"));