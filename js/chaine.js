// Exo 01

function chaineToArray(chaine)
{
    let tab = chaine.split('')
    let result = []

    for (let t in tab)
    {
        if (tab[t] !==" ")
        {
            result.push(tab[t])
        }
    }
    return result;
}

console.log(chaineToArray("Je suis le meilleur au monde"));


// Exo 2

function inverserOrdreChaine(chaine){
    return chaine.split('').reverse().join('');
}

console.log(inverserOrdreChaine("Hello"));

// Exo 03
function getCaractere(tab)
{
    return tab.join(' ')
}

console.log(getCaractere(["Who", "am", "i", "?"]));

//Exo 04

function upperFirstCars(chaine)
{
    let tab = chaine.split('');

    for (let i = 0; i<tab.length; i++)
    {
        if (tab.indexOf(tab[i]) === 0)
        {
            tab[i] = tab[i].toUpperCase()
        }
        if (tab[i]  ===" " || tab[i]  ==="'")
        {
            tab[i+1] = tab[i+1].toUpperCase()
        }
        
    }
    return tab.join(' ')
}

console.log(upperFirstCars("le soleil se leve à l'est"));

//Exo 05
function nombreCar(chaine)
{
    let somme = 0;
    chaine = chaine.split('')

    for (let t in chaine)
    {
        if (chaine[t] !==" ")
        {
            somme++
        }
    }
    return somme;
}

// Exo 07

function replaceOccurence(car, chaine)
{
    let tab = ["#", '@', "&", "$", "%"]
    chaine = chaine.split('')

    for (let c in chaine)
    {
        let i = Math.floor(Math.random()*5)
        if (chaine[c] === car)
        {
            chaine[c] = tab[i]
        }
        
    }

    return chaine.join(' ')
}

console.log(replaceOccurence("o", "Bonjour tous le monde"));

//Exo 08

function deleteEspace(chaine)
{
    return chaine.split(" ").join('')
}

console.log(deleteEspace("Je suis un pirate"));

// Exo 09
function extractSousChaine(sous, chaine)
{
    let indexDeb = [];
    let indexFin;

    sous = sous.split('')
    chaine = chaine.split('')


    for (let s in sous)
    {
       for (let c in chaine){

            if (chaine[c] === sous[s])
            {
                if (chaine[c+1] === sous[s+1])
                    console.log( "dfdf : "  +chaine.indexOf(chaine[c]));
                    indexDeb.push(chaine.indexOf(chaine[c]))
            }
        }

    }

    let last = indexDeb.length-2;
    indexFin = indexDeb[last]
    let debut = indexDeb[0]

    return "Index debut : " + debut + " Index Fin : " +indexFin 

}

console.log(extractSousChaine("our", "Bonjour"));


// Exo 10
function verifier (chaine1, chaine2)
{
    return chaine1.startsWith(chaine2)
}

console.log(verifier("Saturday Night", "Sunday"))