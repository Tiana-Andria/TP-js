//Écrivez une condition ternaire qui vérifie si un nombre est pair. 
//Si c'est le cas, affichez "Le nombre est pair", sinon affichez "Le nombre est impair".
let nombre=9;
let condition= nombre%2==0? "Le nombre est pair" : "Le nombre est impair";
console.log(condition);

//Créez une variable temperature contenant une valeur en degrés Celsius. Utilisez une condition ternaire pour afficher "Il fait chaud !" 
//si la température est supérieure à 30 degrés Celsius, sinon affichez "La température est agréable".
let temperature=20;
let cond=temperature>30 ? "Il fait chaud" : "La temperature est agreable";
console.log(cond);

//Déclarez une variable score et attribuez-lui une valeur. 
//Utilisez une condition ternaire pour afficher "Bravo !" si le score est supérieur à 100, sinon affichez "Essaie encore !"
let score=78;
let cnd=score>100 ? "Bravoo !" : "Essaie encore !";
console.log(cnd);

//Créez une variable age et attribuez-lui une valeur. 
//Utilisez une condition ternaire pour déterminer si la personne est majeure ou mineure, puis affichez le résultat dans la console.
let age=40;
let majeure = age>=18 ? "La personne est majeure" : "la personne est mineure";
console.log(majeure);

//Déclarez une variable isLogged qui représente l'état de connexion d'un utilisateur (true ou false). 
//Utilisez une condition ternaire pour afficher "Bienvenue !" si l'utilisateur est connecté, sinon affichez "Veuillez vous connecter".
let isLogged = false;
let res = isLogged == true ? "Bienvenue !" : "Veuillez vous connecter";
console.log(res);
