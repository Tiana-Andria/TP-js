let btn = document.getElementById("myBtn");
let para = document.getElementById("para");


btn.addEventListener("click", function(){
    let red = Math.floor(Math.random() * 200);
    let blue = Math.floor(Math.random() * 200);
    let green = Math.floor(Math.random() * 200);

    para.setAttribute("style", `background-color:rgb(${red}, ${green}, ${blue})`)

})