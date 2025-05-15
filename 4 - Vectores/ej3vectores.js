const leer = require("prompt-sync")();

function main() {
    const elementos = [1, "B", false, "D31", "Enter", true, 3.4];
    elementos[0] = true;
    elementos[3] = 9.3;
    elementos[6] = "Hello world";
    console.log(elementos);
}

main();