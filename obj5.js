//objet compte bancaire
let compte={
    titulaire:'koto',
    solde:1000,
    transactions:[],
    deposer:()=>{
        let montant;
        compte.solde+=montant;
        return compte.solde;
    },
    retirer:()=>{
        let argent;
        if(argent>solde){
            console.log('solde insuffisant');
        }
        else{
            compte.solde-=argent;
            return compte.solde;
        }
    },
    
}