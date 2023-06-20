let person = {
    nom : "John",
    age : 34,
    profession : "Medecin",
    description :  ()=>{
        return `Nom : ${person.nom} 
                age : ${person.age} 
                profession : ${person.profession}`
    } 
}

console.log(person.description());

// livre

let livre = {
    titre : "Fara malemy sy trimobe",
    nbrePages : 400,
    details : function(){
        return `${this.titre} ${this.nbrePages}`
    }

}

console.log(livre.details());


// cercle

let cercle = {
    rayon : 10,
    diametre : 20,
     circonference : function(){
        return 2*3.14*this.rayon
     }
}

console.log(cercle.circonference());

// voiture

let voiture = {
    marque : "Bugatti",
    modele : "Veyron",
    annee : 2000,
    estVeille : function(){
        let day = new Date();
        let year = day.getFullYear();
        let ans = year - this.annee;
        if (ans>10)
        {
            return "Vielle"
        }
        return "Non vielle"
    }
}

console.log(voiture.estVeille());


//compte bancaire

let compte = {
    solde : 700,
    retrait : function(somme){
        if (this.solde-somme < 0)
        {
            return "Retrait non autorisé"
        }
        return this.solde = this.solde -somme;
    }
}

console.log(compte.retrait(700));

//produit
let produit = {
    nom : "telephone",
    qte :10,
    prix : 2000,

    fournir : function(qte){
        this.qte = this.qte +qte
        console.log(this.qte);
    },

    vendu : function(qte){
        this.qte = this.qte -qte
        console.log(this.qte);
    }
}


produit.vendu(6)
produit.fournir(2)


