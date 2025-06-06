const leer = require("prompt-sync")();




function main() {
    /* console.log("\tHola Hermione Granger!");
    console.log("\tHola Draco Malfoy!");
    console.log("\tHola Dobby!"); */
    saludarA("Hermione Granger");
    saludarA("Draco Malfoy");
    saludarA("Dobby");
}



main();
















/**
 * Saluda a una persona con su nombre y un mensaje
 * @param {String} nombrePersona a saludar con un mensaje
 */
function saludarA(nombrePersona) {
    console.log("\n\t- Hola "+nombrePersona+"!\n");
}