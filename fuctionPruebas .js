var vector = [2, 6, 9, 3, 39, 5]
console.log(vector);
var aux = 0;
for (let i = 0; i < vector.length - 1; i++) {
    for (let j = i + 1; j < vector.length; j++) {
        if (vector[i] > vector[j]) {
            aux = vector[j];
            vector[j] = vector[i];
            vector[i] = aux;
        }

    }
}
console.log(vector);
contador = 0
for (let i = 0; i < vector.length - 1; i++) {
    for (let j = i + 0; j < vector.length; j++) {
        if (vector[i] == vector[j]) {
            contador = contador + 1
        }

    }
}

if (contador >= 2) {
    console.log(`El vector tiene moda`)
} else {
    console.log(`El vector no tiene moda`)
}

console.log(contador)