var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i] = Math.round((Math.random()) * 100);
}
console.log(vector);

var vector2 = [2, 15, 13, 151, 51, 23]


//function cuadratica 
function cuadratica(a, b, c) {
    r1 = (b * -1 + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    r2 = (b * -1 - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
}



//fuction sumar 
function sumarvector(vec, tam) {
    var suma = 0
    for (let i = 0; i < tam; i++) {
        suma = suma + vec[i];
    }
    console.log(`La suma de los numeros es ${suma}`)
}
sumarvector(vector, 10)


//fuction buscar 
function buscar(vec, n) {
    bus = 0
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] == n) {
            bus += 1
        }
    }
    if (bus > 0) {
        console.log(`Si esta el numero ${n}`)
    } else if (vec != n) {
        bus = 0
        console.log(`No esta el numero ${n}`)
    }
}
buscar(vector, 3)


//function burbuja
function burbuja(vector) {
    sumav = 0;
    cont = 0;
    aux = 0;
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = i + 1; j < vector.length; j++) {
            if (vector[i] > vector[j]) {
                aux = vector[j];
                vector[j] = vector[i];
                vector[i] = aux;
            }

        }
    }
    console.log(vector)
}
burbuja(vector2)


//function mediana
function mediana(vector) {
    sumav = 0;
    cont = 0;
    aux = 0;
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = i + 1; j < vector.length; j++) {
            if (vector[i] > vector[j]) {
                aux = vector[j];
                vector[j] = vector[i];
                vector[i] = aux;
            }

        }
    }

    if (vector.length % 2 == 0) {
        a = vector.length / 2
        b = a - 1
        c = (vector[a] + vector[b]) / 2
        d = Math.round(c)
        console.log(`mediana de la lista de numero sin aproximar ${c} con aproximacion ${d}`)
    } else {
        e = vector.length / 2
        f = Math.round(e) - 1
        g = vector[f]
        console.log(`La mediana es ${g}`)
    }
}
mediana(vector2)
    //flecha

let medianaF = vector => {
    sumav = 0;
    cont = 0;
    aux = 0;
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = i + 1; j < vector.length; j++) {
            if (vector[i] > vector[j]) {
                aux = vector[j];
                vector[j] = vector[i];
                vector[i] = aux;
            }

        }
    }

    if (vector.length % 2 == 0) {
        a = vector.length / 2
        b = a - 1
        c = (vector[a] + vector[b]) / 2
        d = Math.round(c)
        console.log(`mediana de la lista de numero sin aproximar ${c} con aproximacion ${d}`)
    } else {
        e = vector.length / 2
        f = Math.round(e) - 1
        g = vector[f]
        console.log(`La mediana es ${g}`)
    }
}
medianaF(vector)