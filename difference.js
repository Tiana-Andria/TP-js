//difference entre les noombres pairs et impairs
function differencePairImpair(){
    let nb=[];
    for(let i=1;i<=10;i++){
        let nombre=prompt("saisissez un entier");
        nb.push(Number(nombre));
    }
    
    let pair=0;
    let impair=0;

    for(let j=0;j < nb.length;j++){
        if(nb[j] %2 ===0){
            pair+=nb[j];
        }
        else{
            impair+=nb[j];
        }
    }
    let difference=pair-impair

   return difference;
}
differencePairImpair()
