let machaine = "Hello les zeros hehehe"

function getNombreMot(chaine)
{
    let ch = chaine.split('');
    let somme = 0;
    for (let c in ch)
    {
        if (ch[c] !== " ")
        {
            somme ++;
        }
    }

    return somme;
}

console.log(getNombreMot("Bonjour les amoureux"));

//****************************** ***/

function triChaineByLength(chaine)
{
   return  chaine.split(" ").sort((a, b)=>{
        return a-b
    })
}


console.log(triChaineByLength(machaine));

//*********************************** */

function inverserChaine(chaine)
{
    return chaine.split(" ").reverse()
}

console.log(inverserChaine(machaine));

//************************************** */

function getChaineSup5(chaine)
{
    chaine = chaine.split(" ");
    let tab = [];
    for (let c in chaine)
    {

        if (chaine[c].length >= 5 )
        {
            tab.push(chaine[c])
        }
    }
    return tab
}

console.log(getChaineSup5(machaine));

//************************************ */

function concatEltCommun (tab1, tab2)
{
    let tab = []

    for (let i=0; i<tab1.length; i++)
    {
        for (let j = 0; j<tab2.length; j++)
        {
            if (tab1[i] === tab2[j])
            {
                tab.push(tab2[j])
            }
        }
    }
    return tab
}

let x = [5,89, 9, 100, 'H', 45, 'E', 78, "Holla"]
let y = ["H", 25, "100", 99, 3, 5, "Holla", "HHH", 'EE']

console.log(concatEltCommun(x,y));