// Écrire une fonction qui prend une chaîne de caractères en entrée et renvoie la chaîne avec les mots triés par longueur.
function trierChaine(chaine) {
    let c= chaine.split(" ");
    let trie = c.sort((b,a) => a.length - b.length);
    let nouvelle = trie.join(" ");
  
    return nouvelle;
  }
  
console.log(trierChaine("carlo toupalou ngoli"));
