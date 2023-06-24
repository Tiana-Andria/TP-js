function remplacer(chaine,occurence,remplacant){
    let nouvelle='';
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] === occurence) {
         nouvelle += remplacant;
        } else {
          nouvelle += chaine[i];
        }
      }
      return nouvelle;
}