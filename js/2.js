function sommePair(tab)
{
    let somme = 0;

    for (let i=0; i<tab.length; i++)
    {
        tab[i] % 2 === 0 ? somme = somme+tab[i] : somme = somme;
    }

    return somme;

}

console.log(sommePair([2,6,7,2,5,3,14]))