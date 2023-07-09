/*Consegna: Fai inserire un numero, che chiameremo N, all’utente. Genera N array,
ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.*/

//I ask the user how many arrays he'd like to create
let n = parseInt(prompt("How many arrays would you like to create:"));
//I console print the number of array to create to manual check
console.log(n + " number of arrays to create by user request");

/*
This for cycle firstly takes the number of arrays requested by the user and runs
i = n cycles, for each cycle (hence for each array created) the second for cycle
runs 10 times inputting 10 integer numbers in the empty array.
We still don't have a way to create and store multiple different arrays so before
creating one I establish arrayNumb empty with `let arrayNumb = [];` (row: 19), then 
populate it once with 10 numbers, print it, delete it again and so on for how many 
times the user requested.
*/
for (let i = 0; i < n; i++){
    let arrayNumb = [];
    for (let i = 0; i < 10; i++){
        let nToPush = (Math.floor(Math.random() * 100) + 1);
        arrayNumb.push(nToPush);
    }
    console.log(arrayNumb)
}