let amis = ["Trois", "de vos", "amis"];

for(let n in amis){
    console.log(amis[n]);
}


let numbers = [2,6,8,9,3,6];

let somme = 0;
let total= numbers.length;

for(let n in numbers){
    somme = somme + numbers[n]
}

console.log(somme/total);

function filtersEvenNumbers(tab){
    return tab.filter((a)=>{
        return a % 2 == 0
    })
}

console.log(filtersEvenNumbers(numbers));



function findMaxNumber(tab){
    return tab.sort((a,b)=>{
        return a > b;
    })
}

console.log(findMaxNumber(numbers));

let fruits = ["banana", "coco", "apple", "pineapple"]

let fruitLength = fruits.map((fruit)=>{
        return fruit.split('').length
})

console.log(fruitLength);