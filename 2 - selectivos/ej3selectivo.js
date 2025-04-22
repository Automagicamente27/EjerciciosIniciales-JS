const leer = require("prompt-sync")();

const OPC_1 = "S";
const OPC_1_TITULO = "Sumar";
const OPC_2 = "R";
const OPC_2_TITULO = "Restar";

function main() {
    let numIngresado1 = 0;
    let numIngresado2 = 0;
    let opcRecibida = "def opcion";
    let resultado = 0;

    console.log("Ingresa la operacion a iniciar\n["+OPC_1+"] "+OPC_1_TITULO+" - ["+OPC_2+"]"+OPC_2_TITULO);
    opcRecibida = leer();
    console.log("Ingresa un numero a operar");
    numIngresado1 = Number(leer());
    console.log("Ingresa otro numero a operar");
    numIngresado2 = Number(leer());

    if (opcRecibida.toUpperCase() === OPC_1) {
        resultado = numIngresado1 + numIngresado2;
    }else if(opcRecibida.toUpperCase() === OPC_2){
        resultado = numIngresado1 - numIngresado2;
    }
    
    console.log("Resultado de operacion: "+resultado);
    
}

main();