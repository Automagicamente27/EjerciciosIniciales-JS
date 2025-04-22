const leer = require("prompt-sync")();

const RANGO_MAX = 10;

function main() {
    let numeroIngresado = "def num";
    let numeroAleatorio = "def num aleatorio";

    console.log("Ingresa un numero entero entre 0 y "+RANGO_MAX);
    numeroIngresado = Number(leer());

    numeroAleatorio = azar(RANGO_MAX);

    console.log("###Simulando lanzar moneda###");
    
    if (numeroIngresado >= numeroAleatorio) {
        console.log("Cruz");
    }else{
        console.log("Cara");
    }
}

main();

function azar(max) {
    return Math.floor(Math.random() * (max +1));
}