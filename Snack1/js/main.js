/*Consegna:
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
la somma degli elementi è minore di 50.
*/

//I establish an empty array to populate in the for cycle
let arrayToPop = [];
//I establish a variable to store the summed about at each iteration starting from 0
let sum = 0;

/*
This while cycle's condition is to be iterated until the sum is greater than 50, 
the sum is operated for each cycle, at row: 20, taking the first index of arrayToPop
(being 0 for the first cycle as stated above) and adding the new user given number.
*/
while (sum < 50 - 1){
    numToInsert = parseInt(prompt("Write down one number to add to the array, this input request will be itirated until the sum of the user given numbers is less than 50"));
    arrayToPop.push(numToInsert);
    console.log(numToInsert + " is the user given number at this iteration");
    sum += arrayToPop[0];
    console.log(sum + " is the sum of the previous iteration's sum + this iteration's user given number");
}

console.log(sum + " sum at the end of the for cycle after let sum reached sum > 50");

