let tab = [7, "Jon", 8.9, {name: "Doe", age: 12}];

//ajout premier elt
tab.reverse()
tab.push(1)
tab.reverse()

//ou
tab.splice(0, "Je suis le premier element")

//Ajout dernier element
tab.push(44)

//supprime le dernier element
tab.pop()

//modifier un element specifique
tab[3].name = "Johnson"

//verifier si un element existe
console.log(tab.includes("Jon"));

//Concatener 2 tableau
tab2 = ["Hello", 2, 5]

console.log(tab.concat(tab2));

//Trouver index d'un element dans un tableau
console.log(tab.indexOf(8.9))

//Inverser l'ordre
console.log(tab.reverse())

//supprimer un element specifique
tab.pop(2)
console.log(tab);

//Filtrer les elements d'un tab en fonction d'une condition
let obj = tab.filter((item)=>{
    return item === Object
})

console.log(obj);

// compter le nombre d'element dans une tableau
let i = 0
let count = 0;
while (i<tab.length)
{
    if (!isNaN(tab[i]))
    {
        count++
    }
    i++;
}
console.log(count);

// tableau contenant le carrée d'un nombre

let j = 0
let square = [];
while (j<tab.length)
{
    if (!isNaN(tab[i]))
    {
        square.push(tab[i] * tab[i])
    }
    j++;
}

console.log(square);