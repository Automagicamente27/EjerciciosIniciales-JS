const leer = require("prompt-sync")();

function main() {
    let nombreIngresado = "def nombre";
    let msjIngresado = "def mensaje";
    let opcIngresada = "def opcion";

    console.log("Ingresa tu nombre");
    nombreIngresado = leer();
    console.log("***Llamando***");
    console.log("Ocupado\nQue desea hacer? [1] Dejar mensaje - [2] Cortar llamada");
    opcIngresada = leer();
    
    if (opcIngresada === "1") {
        console.log("Ingresa el mensaje");
        msjIngresado = leer();
        console.log("###Llamada perdida de "+nombreIngresado+"###");
        console.log("Mensaje: "+msjIngresado);
    }else if(opcIngresada === "2"){
        console.log("###Cortando llamada###");
    }
}

main();