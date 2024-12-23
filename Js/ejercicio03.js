const numero = parseInt(prompt("Ingresa un número del 1 al 100:"));

if (numero >= 1 && numero <= 100) {
    for (let i = 1; i <= 1000; i++) {
        let resultado = numero * i;
        if (resultado > 1000) {
            console.log("Se detuvo porque el resultado es mayor a 1000.");
            break;
        }
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("Número fuera de rango. Intenta de nuevo.");
}
