//verifier l'equilibre des parantheses
function parentheses(chaine){
    let phrase=chaine.split("");
    let nombre=0;
    let isa=0;
    let ok=false
    for(let i=0;i<phrase.lenght;i++){
        if(phrase[i]==='('){
            nombre++;
        }
        else if (phrase[i]===')'){
            isa++
        }
    }
    if (isa===nombre){
        ok=true;
    }
    return ok;
}

//utiliser for in
function parentheses(chaine){
    let phrase=chaine.split("");
    let nombre=0;
    let isa=0;
    let ok=false
    for(let i in phrase){
        if(phrase[i]==='('){
            nombre++;
        }
        else if (phrase[i]===')'){
            isa++
        }
    }
    if (isa===nombre){
        ok=true;
    }
    return ok;
}

let exemple1 = "(())()";
let estEquilibre1 = parentheses(exemple1);
console.log(estEquilibre1); // Affiche true