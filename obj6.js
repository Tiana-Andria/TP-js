//objet produits
let produit={
    nom:'koto',
    prix:1000,
    stock:3,
    augmenter:()=>{
        let quantite;
        produit.stock+=quantite;
        return produit.stock;
    },
    diminuer:()=>{
        let qte;
        if(qte>stock){
            console.log('stock insuffisant');
        }
        else{
            produit.stock-= qte;
            return produit.stock;
        }
    },
    
}