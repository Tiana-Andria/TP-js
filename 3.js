//Créez un tableau d'objets représentant une liste de produits.
//Utilisez la fonction map pour filtrer les produits dont la propriété prix est supérieure à un certain seuil donné.
let produits=[
    {
        nom:"ovy",
        prix:200
    },
    {
        nom:"vary",
        prix:1000
    },
    {
        nom:"anana",
        prix:100
    },
    {
        nom:"savony",
        prix:500
    }
]

let filtre=produits.map(obj=>{
    if(obj.prix>200){
        return obj;
    }
})
console.log(filtre);