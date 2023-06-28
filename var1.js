//Créez une variable name et attribuez-lui votre nom. Affichez ensuite cette variable dans la console.
let name='Rojo';
console.log(name);

//Déclarez une variable age et attribuez-lui votre âge. Multipliez ensuite cette variable par 2 et affichez le résultat dans la console.
let age=24;
let res=age*2;
console.log(res);

//Échangez les valeurs de deux variables sans utiliser de variable temporaire.
let var1=1;
let var2=2;
var1=var1+var2-var2;
var2=var1+var2-var1;
console.log(var1);
console.log(var2);

//Créez une variable isRaining et attribuez-lui une valeur booléenne indiquant s'il pleut. 
//Ensuite, utilisez une condition if pour afficher "Il pleut !" si la valeur est vraie.
let isRaining=true;
if(isRaining==true){
    console.log("Il pleut");
}

//Déclarez une constante PI et attribuez-lui la valeur de π (pi). 
//Utilisez ensuite cette constante pour calculer l'aire d'un cercle de rayon 5.
const PI=Math.PI;
let aire=5*PI;
console.log(aire);