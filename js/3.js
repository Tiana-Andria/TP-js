function isAnagramme(chaine1, chaine2){
    let ok = false;    
    
    chaine1 = chaine1.split('');
    chaine2 = chaine2.split('');

    let long1 = chaine1.length;
    let long2 = chaine2.length;

    if (long1 !== long2){
        return false;
    }

    for (let i = 0; i<long1; i++)
    {
        if (!chaine2.includes(chaine1[i]))
        {
            return false;
        }
        ok = true;
    }

    return ok;
}

console.log(isAnagramme("niche", "chiens"))