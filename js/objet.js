function getNombrePropreties(obj)
{
    let somme = 0;
    for (let o in obj)
    {
        somme++
    }

    return somme;
}

let person = {
    name : "John",
    age : 45,
    CIN : 201065432123
}

console.log(getNombrePropreties(person));

//*****************************************/

function getPropreties(obj)
{

    return Object.getOwnPropertyNames(obj)
}

console.log(getPropreties(person));


//************************************** */

function getValues(obj)
{
    let tab = [];

    for (let o in obj)
    {
        tab.push(obj[o])
    }
    return tab;
}

console.log(getValues(person));