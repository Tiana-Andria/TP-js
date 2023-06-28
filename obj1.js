//Créez un objet person avec les propriétés name et age. Affichez ensuite ces propriétés dans la console.
//Ajoutez une méthode sayHello à l'objet person qui affiche "Bonjour !" dans la console en utilisant la propriété name.
let person = {
    name: "Rojo",
    age: 12,
    sayHello:()=>{
        console.log("Bonjour " + person.name + " !");
    }
  };
  
  for (let ppte in person) {
    console.log(person.ppte);
  }
  person.sayHello();
  
//Créez un objet car avec les propriétés brand, model et year.
// Utilisez la notation d'objet pour accéder à ces propriétés et les afficher dans la console.
let car={
    brand:"Toyota",
    model:"Corolla",
    year:2022,
}
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// Déclarez une variable propertyName et attribuez-lui la valeur "model".
// Utilisez cette variable pour accéder à la propriété correspondante de l'objet car.
let propertyName="model";
console.log(car[propertyName]);

//Créez un objet book avec les propriétés title, author et year. 
//tilisez la boucle for...in pour afficher toutes les propriétés et leurs valeurs dans la console.
let book={
    title:"j'ai failli te diire je t'aime",
    author:"F.Moccia",
    year:2013
}
for(let ppte in book){
    console.log(book[ppte]);
}

