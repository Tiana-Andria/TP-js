function ispair(nbre) {
    return nbre%2 ===0
}

console.log(ispair(5));

// Exo 2

function sommeNumber(nb)
{
    let somme = 0;
    for (let i = 0; i<=nb; i++)
    {
        somme = somme +i;
    }

    return somme;
}

console.log(sommeNumber(5));

// Exo 03
function plusGrand(nb1,nb2,nb3)
{
   let plusgrand = nb1

   if (nb2>plusgrand)
   {
    plusgrand = nb2
   }
   if (nb3>plusgrand)
   {
    plusgrand = nb3
   }

   return plusgrand
}

console.log(plusGrand(4,9,7));

//Exo4

function renverserNombre(nbre)
{
    let char = nbre.toString();
    char = char.split('')
    //console.log(char.reverse().join(''));
    
    return parseInt(char.reverse().join(''))
}

console.log(renverserNombre(567));

//Exo 05
