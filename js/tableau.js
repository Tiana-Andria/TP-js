// tableau avec le nom de 5 pays

let pays = ["Madagascar", "France", "Allemagne", "Japon", "Bali"]

// ajout a la fin
pays.push("Nosy Be")

// delete first element
pays.splice(0,1)
console.log(pays);

//acceder a un element specifique
console.log(pays[3]);

//Parcours
for (let p in pays)
{
    console.log(pays[p]);
}


//cree tab vide et ajoutez des elmts par boucle
let capitale = [];

let c = ["Tana", "Paris", "Berlin", "Bali"]

for (let cap in c)
{
    capitale.push(c[cap]);
}

console.log(capitale);

// trie par ordre alphabetique
console.log(pays.sort());

//verifier un elemnt specifique dans un tab
console.log(pays.includes("Etats Unis"));

// concatener 2 tab
console.log(pays.concat(capitale));



