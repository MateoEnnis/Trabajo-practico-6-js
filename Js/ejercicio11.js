// Solicitar al usuario una lista de palabras separadas por comas
const entrada = prompt("Ingresa una lista de palabras separadas por comas:");

// Dividir las palabras en un array
const palabras = entrada.split(",").map(palabra => palabra.trim()); // Quitar espacios adicionales
const palindromas = [];

// Verificar cada palabra
for (let palabra of palabras) {
    // Convertir la palabra a minúsculas y compararla con su reverso
    const palabraInvertida = palabra.toLowerCase().split("").reverse().join("");
    if (palabra.toLowerCase() === palabraInvertida) {
        palindromas.push(palabra); // Agregar a la lista de palíndromas
    }
}

// Mostrar las palabras palíndromas
if (palindromas.length > 0) {
    console.log(`Palabras palíndromas: ${palindromas.join(", ")}`);
} else {
    console.log("No se encontraron palabras palíndromas.");
}