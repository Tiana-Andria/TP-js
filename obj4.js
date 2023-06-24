//objet voiture
let voiture={
    marque:'Peugeot',
    modele:305,
    anneeFabrication:1800,
    age:()=>{
        let vieille=false;
        let anneeActuelle=(new Date()).getFullYear();
        let taona=anneeActuelle-anneeFabrication;
        if (taona>10){
            vieille=true;
        }
        return vieille;
    },
};