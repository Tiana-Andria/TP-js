//Créez un tableau d'objets représentant une liste de personnes.
//Utilisez la fonction map pour ajouter une propriété nomComplet à chaque objet, en concaténant les propriétés prenom et nom.
let personnes=[
    {
        nom:"Rojo",
        prenom:"Malanto"
    },
    {
        nom:"Miary",
        prenom:"Marina"
    },
]

let nouveau=personnes.map(obj=>{
    return {
        prenom: obj.prenom,
        nom: obj.nom,
        nomComplet: obj.prenom + " " + obj.nom
      };
})
console.log(nouveau);
