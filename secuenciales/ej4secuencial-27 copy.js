const leer = require("prompt-sync")();

function main() {
    let nombreIngresado = "def nombre";
    let colorIngresado = "def color"

    console.log("Ingrese su nombre");
    nombreIngresado = leer();
    console.log("Ingrese color favorito");
    colorIngresado = leer();
    
    console.log("Hola " + nombreIngresado + "! tu color favorito es "+ colorIngresado);
}
main();