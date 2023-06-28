//Créez un tableau contenant les noms de trois de vos amis. Parcourez ensuite le tableau et affichez chaque nom dans la console.
let tab=['Pitou','Carlo','Toupa'];
for(let i in tab){
    console.log(tab[i]);
}

//Déclarez un tableau de nombres. Utilisez une boucle pour calculer la somme de tous les nombres du tableau et affichez le résultat.
let tableau=[1,2,3,4,5];
let somme=0;
for(let i=0;i<tableau.length;i++){
    somme+=tableau[i];
}
console.log(somme);

//Créez une fonction filterEvenNumbers 
//qui prend un tableau de nombres en paramètre et renvoie un nouveau tableau contenant uniquement les nombres pairs.
function filterEvenNumbers(nombre){
    let pair=[];
    for(let i=0;i<nombre.length;i++){
        if(nombre[i]%2==0){
            pair.push(nombre[i]);
        }
    }
    return pair;
}
console.log(filterEvenNumbers([1,2,3,4,5,6]));

//Écrivez une fonction findMaxNumber qui prend un tableau de nombres en paramètre et renvoie le nombre le plus élevé.
function findMaxNumber(nombre){
    let max=0;
    for(let i=0;i<nombre.length;i++){
        if(nombre[i]>max){
            max=nombre[i];
        }
    }
    return max;
}
console.log(findMaxNumber([2,5,1,8,0,54,7]));

//Créez un tableau de fruits. Utilisez la méthode map pour créer un nouveau tableau contenant la longueur de chaque fruit.
let fruit=['fraise','melon','tomate','pomme'];
let nouveau=fruit.map(fruit => fruit.length);
console.log(nouveau);