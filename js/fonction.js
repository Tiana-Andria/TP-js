function toDegreCelsius(temp)
{
    let d = (temp-32)/(1.8)
    return d;
}

console.log(toDegreCelsius(90));


// la somme d'un chiffre d'un nombre

function sommeChiffreNombre(nb)
{
    let st = nb.toString().split('');
    let somme = 0;
    for (s in st)
    {
        somme = somme + parseInt(st[s])
    }

    return somme;
}

console.log(sommeChiffreNombre(12345));

//verification parentheses

function verifierParentheses(chaine)
{
    let count1 = 0;
    let count2 = 0;

    let tab = chaine.split("")
    
    for (t in tab)
    {
        if (tab[t] === '(')
        {
            count1++;
        }
        if (tab[t] === ')')
        {
            count2++;
        }

    }

    if (count1 === count2)
    {
        return true
    }

    return false
}

console.log(verifierParentheses("alert('je() suis un message) dans alert)"));