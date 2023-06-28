let para = document.getElementById("para");
let btn = document.getElementById("myBtn");
let i = 0

btn.addEventListener("click", function(){
    if (i == 0)
    { 
        para.innerHTML = "Un nouveau texte"
        i++;
    }
    else
        {para.innerHTML += " Un autre texte"}
})