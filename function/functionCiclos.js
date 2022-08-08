//10. Algoritmo para hallar el m.c.d de dos números m y n por 
//el algoritmo de Euclides

function mcd(numero1, numero2) {
    do {
        residuo = numero1 % numero2;
        if (residuo != 0) {
            numero1 = numero2;
            numero2 = residuo;
        } else {
            mcd = numero2
        }

    } while (residuo != 0);
    console.log(`El M.C.D. es : ${mcd} `)
}

mcd(18, 24)

let mcdF = (numero1, numero2) => {
    do {
        residuo = numero1 % numero2;
        if (residuo != 0) {
            numero1 = numero2;
            numero2 = residuo;
        } else {
            mcd = numero2
        }

    } while (residuo != 0);
    console.log(`El M.C.D. es : ${mcd} `)
}

mcdF(18, 24)

// 6. Calcular el máximo de números positivos introducidos por 
// teclado, sabiendo que metemos números hasta que 
// introduzcamos uno negativo. El negativo no cuenta. 
var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i] = Math.round((Math.random()) * 100);
}
console.log(vector)
vector[20] = -21


function maxneg(vector) {
    contador = 0;
    promedio = 0;
    suma = 0;

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] >= 0) {
            contador = contador + 1;
            suma = suma + vector[i]
            promedio = suma / contador
        }
    }
    console.log(`El promedio es ${promedio}`)

}
maxneg(vector)

//flecha

let maxnegF = vector => {

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] >= 0) {
            contador = contador + 1;
            suma = suma + vector[i]
            promedio = suma / contador
        }
    }
    console.log(`El promedio es ${promedio}`)

}
maxnegF(vector)