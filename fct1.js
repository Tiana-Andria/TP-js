//Créez une fonction add qui prend deux paramètres et retourne leur somme.
//Appelez ensuite cette fonction avec des valeurs différentes et affichez le résultat.
function add(nb1, nb2) {
    let somme = nb1 + nb2;
    return somme;
  }

    let a = 2;
    let b = 5;
    let somme = add(a, b);
    console.log(somme);
  
//Écrivez une fonction isEven qui prend un nombre en paramètre et renvoie true si le nombre est pair, et false sinon.
function isEven(nombre){
    if(nombre%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));

// Définissez une fonction greet qui prend un nom en paramètre et affiche "Bonjour [nom] !" dans la console.
function greet(nom){
    console.log("Bonjour " + nom + " !");
}
let nom='Rojo';
greet(nom);

//Créez une fonction calculateArea qui prend la largeur et la hauteur d'un rectangle en paramètres et renvoie l'aire du rectangle.
function calculateArea(largeur,hauteur){
    let aire=largeur*hauteur;
    return aire;
}
console.log(calculateArea(10,5));

//Écrivez une fonction reverseString qui prend une chaîne de caractères en paramètre et renvoie la chaîne inversée.
function reverseString (chaine){
    let inverse=chaine.split(" ").reverse().join(" ");
    return inverse;
}
console.log(reverseString('Bonjour Rojo'));