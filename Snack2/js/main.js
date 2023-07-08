/*
Crea due tag div con due id diversi. 
Un div avrà il testo colorato di rosso mentre l’altro di verde. 
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e 
in verde i numeri pari.
*/

let arrayNum = [];
let arrayRed = [];
let arrayGreen = [];
let arrayDiv = document.querySelector(".bg-warning");
let redDiv = document.querySelector(".bg-danger");
let greenDiv = document.querySelector(".bg-success");

while (arrayNum.length < 50){
    let numbToGenerate = (Math.floor(Math.random() * 50) + 1);
    arrayNum.push(numbToGenerate);
}

console.log(arrayNum)

for (let i = 0; i < arrayNum.length; i++){
    arrayDiv.innerHTML += `<span class="fs-3">${arrayNum[i]} </span>`;
    
    if(arrayNum[i]% 2 !== 0){
        arrayRed.push(arrayNum[i])
        redDiv.innerHTML += `<span class="fs-3">${arrayNum[i]} </span>`;
        console.log(arrayRed)
    }
    else{
        arrayGreen.push(arrayNum[i])
        greenDiv.innerHTML += `<span class="fs-3">${arrayNum[i]} </span>`;
        console.log(arrayGreen + "arrayGreen")
    }
}


