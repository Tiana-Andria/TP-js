//Recherche du plus long mot : Écrivez un algorithme qui trouve le mot le plus long dans une phrase donnée.
// Par exemple, pour la phrase "Le chat dort paisiblement", le résultat devrait être "paisiblement"
function plusLong(chaine){
    let separer=chaine.split(' ');
    let long=separer[0];
    for(let i=0;i<separer.length;i++){
        if(long.length<separer[i].length){
            long=separer[i];
        }
    }
    return long;
}
console.log(plusLong("Le chat dort paisiblement"));