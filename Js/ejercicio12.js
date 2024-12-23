// Generar un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinado = false; // Variable para controlar el bucle

while (!adivinado) {
    // Pedir al usuario que adivine el número
    const intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

    // Validar que sea un número válido
    if (isNaN(intento) || intento < 1 || intento > 10) {
        console.log("Por favor, ingresa un número válido entre 1 y 10.");
    } else if (intento === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número.");
        adivinado = true; // Detener el bucle
    } else if (intento < numeroSecreto) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
}