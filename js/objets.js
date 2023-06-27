let person = {
    name : "John",
    age : 23
}

person.sayHello = function(){
    return "Bonjour ", this.name;
}

console.log(person.sayHello());


let car = {
    brand : "Mustang",
    model : "Impala",
    year : 1997
}

console.log(car.brand);


let propertyName = "model"

car[propertyName] = "Impala chevrolet";

let books = {
    title : "Intuitio",
    author : "Laurent Gounelle",
    year: 2022
}

for (book in books)
{
    console.log(books[book]);
}