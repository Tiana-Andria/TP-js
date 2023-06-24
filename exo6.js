/*Écrire une fonction qui prend une chaîne de caractères en entrée et renvoie la chaîne avec les mots en ordre inverse
mais les lettres de chaque mot restent dans l'ordre.*/
function inverserChaine(chaine){
    let inverse=chaine.split(" ").reverse().join();
    return inverse;
}
console.log(inverserChaine("carlo toupalou ngoli"));