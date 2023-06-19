// objet vide
let obj = {}

//add new properties
obj.fname = "John"
obj.lname = "Doe"
obj["age"] = 90

console.log(obj);

// update
obj["fname"] = "Jane"
console.log(obj);

//Delete 
delete obj["age"]
console.log(obj);

// create function in object
obj.fullname = function (){
    return `${this.fname} ${this.lname}`
}
console.log(obj);

//appeler une fonction à l'interieur
console.log(obj.fullname());

// acceder à une propriété avec notation pointée
console.log(obj.fname)

//acceder à une propriétés avec crochets
console.log(obj["lname"]);

//concatener 2 objets
let vacances = { name : "plage", lieux: "Majunga"}
console.log(Object.assign(obj, vacances));


//crée new objet en utilisant le propriétés d'un objet
let person = {...obj};
person.fname = "Lucky"
person.lname = "Luck"

//parcours d'un obj
for (let o in obj)
{
    console.log(obj[o]);

    if (typeof obj[o] === "Object")
    {
        for (let j in obj[o])
        {
            console.log(obj[o][j]);
        }
    }

}

//Modifier un element specifique dans un tableau qui est dans un objet
obj.petiteAmi = ["Cassandra", "Miora", "Bella"]
obj.petiteAmi[1] = "Rojo"
console.log(obj);

//crée une nlle propriétés en utilisant des boucles

for(let i = 0; i<2; i++)
{
    obj.i= "Num : " + i 

}

console.log(obj);
