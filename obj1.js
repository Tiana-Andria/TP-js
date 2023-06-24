//creer objet litteral personne
let personne={
    nom:"Rojo",
    age:18,
    profession:"Etudiante",
    //ajouter une methode qui affiche une chaine de caracteres avec les informations de la personne
    infos:()=>{
        let informations='';
        for(let propriete in personne){
            if (typeof personne[propriete]!== 'function'){
            informations +=`${personne[propriete]} `;}
           
        }
        return informations;
    }
};
console.log(personne.infos());
