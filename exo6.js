function Estpalindrome(chaine){
    let inverse=chaine.split(' ').reverse().join(' ');
    let palindrome=false;
    if(inverse===chaine){
        palindrome=true;
    }
    return palindrome;
}
let test = "radar";
let resultat = Estpalindrome(test);
console.log(resultat);