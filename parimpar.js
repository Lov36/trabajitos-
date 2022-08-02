pares = 0
cpares = 0
cimpares = 0
impares = 0
var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i] = Math.round((Math.random()) * 100);
}
console.log(vector)

//numero 
for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
        pares += 1

    } else {
        impares += 1
    }
}
console.log(pares)
console.log(impares)

//contador
for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
        cpares = cpares + vector[i]

    } else {
        cimpares = cimpares + vector[i]
    }
}
console.log(cpares)
console.log(cimpares)


//promedios 
promediop = cpares / pares
promedioi = cimpares / impares

console.log(promediop)
console.log(promedioi)