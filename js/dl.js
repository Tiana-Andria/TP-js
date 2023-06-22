function devLimit(x,n)
{
    let somme = 0;

    for (let i = 0; i<n; i++)
    {
        if (i === 0)
        {
            somme = somme + Math.pow(x,i) + n*x
        }

        for(let j =2; j<i; j++)
        {
            
        }
    }

    return somme;
}