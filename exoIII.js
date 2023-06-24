function grand(a,b,c){
    let plusGrand=a;
    if(plusGrand<b){
        plusGrand=b;
    }
    if(plusGrand<c){
        plusGrand=c;
    }
    return plusGrand;
}
console.log(grand(2,4,5));