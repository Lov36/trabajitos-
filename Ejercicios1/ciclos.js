// 1. Determinar los divisores de un número introducido por
//teclado
count = 0;
while (count < 6) {
    ++count
    var num = 12;
    var divs = num % count;

    if (divs == 0) {
        console.log(`${count} es divisor de ${num}`)
    } else {
        console.log(`${count} no es divisor de ${num}`)
    }
}


//2. Determinar si un numero es o no es primo 
pri = 1
num = 2
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        pri = 2
    }
}
if (pri == 1) {
    console.log(`${num} es primo`)
} else if (pri == 2) {

    console.log(`${num} no es primo`)
}

//10. Algoritmo para hallar el m.c.d de dos números m y n por 
//el algoritmo de Euclides
numero1 = 8
numero2 = 12

do {
    residuo = numero1 % numero2;
    if (residuo != 0) {
        numero1 = numero2;
        numero2 = residuo;
    } else {
        mcd = numero2
    }

} while (residuo != 0);
console.log(`El M.C.D. es : ${mcd} de ${numero1} y${numero2}`)


// 6. Calcular el máximo de números positivos introducidos por 
// teclado, sabiendo que metemos números hasta que 
// introduzcamos uno negativo. El negativo no cuenta. 
var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i] = Math.round((Math.random()) * 100);
}
console.log(vector)
vector[20] = -21
contador = 0
promedio = 0
suma = 0

for (let i = 0; i < vector.length; i++) {
    if (vector[i] >= 0) {
        contador = contador + 1;
        suma = suma + vector[i]
        promedio = suma / contador
    }
}
console.log(`El promedio es ${promedio}`)


///
pri = 1
num = 1
for (let num = 2; num < 100; num++) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            pri = 2
        }
    }
    if (pri == 1) {
        console.log(`${num} es primo`)
    } else if (pri == 2) {

        console.log(`${num} no es primo`)
    }
}