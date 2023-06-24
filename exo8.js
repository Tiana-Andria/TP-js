// Écrire une fonction qui prend deux tableaux en entrée et renvoie un tableau contenant les éléments communs aux deux tableaux.
function elementCommun(tableau1,tableau2){
    let commun=[];
    for(let i=0;i<tableau1.length;i++){
        let element1=tableau1[i];
        if(tableau2.includes(element1)){
            commun.push(element1);
        }

    }
    return commun;
}
console.log(elementCommun([1,2,3,4],[4,2,5,6]))