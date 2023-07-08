const nomi = ["Michele", "Glorian", "Alessio", "Payeturo", "MurasakiIX", "Padre Riccardo", "Valeryo"];
const cognomi = ["Spuller", "Creum", "Leika", "Lyon", "Bueno", "Carlukkio", "Golluma"];
const button = document.querySelector(".btn");
const table =  document.querySelector(".table");
const tableBody = document.querySelector(".table-body");

/*Test to see if a random name is generated
console.log(rngNomi);
console.log(rngCognomi);
*/

/*Function to have 1 generated name + surname pair generated and printed
* inside the HTML table for each click on the button

button.addEventListener("click", function(){
    table.classList.remove("d-none")
    nameField.innerHTML = "";
    surnameField.innerHTML = "";

    const rngNomi = nomi[Math.floor(Math.random() * nomi.length)];
    const rngCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];

    nameField.innerHTML = `${rngNomi}`;
    surnameField.innerHTML = `${rngCognomi}`;
    console.log(rngNomi);
    console.log(rngCognomi);
});
*/

/*Function that after the button press displays the table, reset the table body
*content then initiates a for cycle. The following for cycle runs for 25 times,
*and it takes the name array and the surnames array and picks a random items
*out of both and prints a whole table row for each of rngNomi and rngCognomi
*combination
*/
button.addEventListener("click", function(){
    table.classList.remove("d-none")
    tableBody.innerHTML = "";

    for (i = 0; i < 24; i++){
        const rngNomi = nomi[Math.floor(Math.random() * nomi.length)];
        const rngCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];
        
        if (i < 24){
        tableBody.innerHTML += `<tr class="table-row">
                                <td class="name text-center">${rngNomi}</td>
                                <td class="surname text-center">${rngCognomi}</td>
                            </tr>`;
        console.log(rngNomi);
        console.log(rngCognomi);
        }
        else{}
    }
});

//BONUS TO DO AFTER WHOLE EXERCISE COMPLETION: prevent names and surname repetitions

/*Unused const's
*
const nameField = document.querySelector(".name");
const surnameField = document.querySelector(".surname");
const tableRow = document.querySelector(".table-row");
*/