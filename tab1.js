//creer un tableau contenant les noms de cinq pays
let tableau=[Madagascar,France,Allemagne,Italie,Chine];
//ajouter un element a la fin du tableau\
tableau.push('Japon');
//supprimer le premier element du tableau
tableau.shift();
//acceder a un element et l'afficher
let element = tableau[1];
console.log(element);
//parcourir tableau
for(let i=0;i<tableau.length;i++){
    console.log(tableau[i]);
}
//parcours avec for in
for(let index in tableau){
    console.log(tableau[index]);
}