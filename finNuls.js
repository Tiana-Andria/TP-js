//mettre les valeurs nuls a la fin du tableau sans changer l'ordre des autres elts
function place(tableau){
    let n=tableau.length;
    let tab=[];
    for(let i=0;i<n;i++){
        if(tableau[i]!==0){
            tab.push(tableau[i]);
        }
       
    }
    for(let j=0;j<n;j++){
        if(tableau[j]===0)
        tab.push(tableau[j])
    }
    return tab;
}
place([1,2,3,0,5,0,9,0,0,1])