function nombrePremier(tab)
{
    let newTab = [];

    for (let i = 0; i<=tab.length; i++)
    {
        for (let j = 1; j<tab.length; j++)
        {
          if (tab[i] % j === 0 && j == 1  j !== tab[i] )
          {
            newTab.push(tab[i])
          }
        }
    }
    return newTab;
}

console.log(nombrePremier([14,13,15,6,4,8,9,7]))