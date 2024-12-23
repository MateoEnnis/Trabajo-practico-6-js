let acumulado = 0;

while (acumulado < 100) {
    const input = prompt("Ingresa un número entero:");
    const numero = parseInt(input); 

    if (!isNaN(numero)) { 
        acumulado += numero; 
        console.log(`Acumulado: ${acumulado}`);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

console.log(`¡El total acumulado es ${acumulado}!`);