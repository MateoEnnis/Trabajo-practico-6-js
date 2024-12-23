// Pedir al usuario un número entero positivo
let numero = parseInt(prompt("Ingresa un número entero positivo:"));

// Validar que sea un número positivo
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingresa un número entero positivo válido.");
} else {
    let invertido = 0; // Variable para almacenar el número invertido

    // Invertir el número usando un bucle
    while (numero > 0) {
        let digito = numero % 10; // Obtener el último dígito
        invertido = invertido * 10 + digito; // Añadir el dígito al número invertido
        numero = Math.floor(numero / 10); // Quitar el último dígito del número original
    }

    console.log(`El número invertido es: ${invertido}`);
}