function add(a,b){
    return a+b
}

console.log(add(3,6));

function isEven(n){
    return n % 2 === 0 ? true : false;
}



function nom(name){
    return "Bonjour ["+name+"]";
}
console.log(nom("John Wick"));



function calculArea(larg, long)
{
    return larg*long;
}

console.log(calculArea(2,3));



function reverseString(chaine){
    return chaine.split('').reverse().join('');
}

console.log(reverseString("Bonjour"));