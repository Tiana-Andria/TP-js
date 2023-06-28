//Créez un tableau d'objets représentant une liste de produits.
// Utilisez la fonction map pour trier les produits par ordre croissant ou décroissant en fonction de leur propriété prix
let produits=[
    {
        nom:"robe",
        prix:1000
    },
    {
        nom:"pantalon",
        prix:2000
    },
    {
        nom:"veste",
        prix:500
    },
]

let filtre=produits.map(produit=>produit).sort((a,b)=>b.prix-a.prix);
console.log(filtre);