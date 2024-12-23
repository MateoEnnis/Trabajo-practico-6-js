const edades = [18, 25, 14, 32, 16, 40]; // Array de edades

// Recorrer el array con un bucle
for (let i = 0; i < edades.length; i++) {
    const edad = edades[i]; // Obtener la edad actual

    if (edad >= 18) {
        console.log(`${edad} años: Mayor de edad`);
    } else {
        console.log(`${edad} años: Menor de edad`);
    }
}
