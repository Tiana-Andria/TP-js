function calculSomme(n){
    let somme=0;
    for(let i=0;i<=n;i++){
        somme+=i;
    }
    return somme;
}
console.log(calculSomme(5));