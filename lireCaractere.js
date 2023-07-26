//lire le caractere et dire s'il s'agit dune lettre ou non, si oui, dire si maj ou min
function lecture(caractere){
    if(isNaN(caractere)){
        console.log(caractere + " est une lettre");
        if(caractere === caractere.toUpperCase()){
            console.log( caractere + " est en majuscule")
        }
        else if(caractere === caractere.toLowerCase()){
            console.log(caractere + " est en minuscule")
        }
    }
    else{
        console.log(caractere + ' est un chiffre');
    }
}
lecture('a')