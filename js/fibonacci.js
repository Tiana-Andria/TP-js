function fibonacci(nbre)
{
    let tab = [0,1];

    for (let i =0; i<=nbre; i++)
    {
        tab.push(tab[i]+tab[i+1])
    }

    return tab;
}

console.log(fibonacci(6));