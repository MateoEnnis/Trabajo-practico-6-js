// Pedir al usuario que ingrese el número de filas
const filas = parseInt(prompt("Ingresa el número de filas para el triángulo:"));

// Validar que sea un número válido
if (isNaN(filas) || filas <= 0) {
    console.log("Por favor, ingresa un número válido mayor que 0.");
} else {
    let triangulo = ""; // Variable para construir el triángulo

    // Generar el triángulo
    for (let i = 1; i <= filas; i++) {
        triangulo += "*".repeat(i) + "\n";
    }

    console.log(triangulo); // Mostrar el triángulo en la consola
}