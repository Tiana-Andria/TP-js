//Inversion de mots : Écrivez un algorithme qui inverse l'ordre des mots dans une phrase.
// Par exemple, pour la phrase "Le ciel est bleu", le résultat devrait être "bleu est ciel Le".
function Inversion(chaine){
    let inverse=chaine.split(" ").reverse().join(" ");
    return inverse;
}
console.log(Inversion("Le ciel est bleu"));