function rellenar(vector) {
    setTimeout(() => {
        for (let i = 0; i < 18; i++) {
            vector[i] = Math.round((Math.random()) * 100);
        }
        console.log(vector);
    }, 2000);

}

function promedio(vector) {
    setTimeout(() => {
        suma = 0
        for (let i = 0; i < vector.length; i++) {
            suma = suma + vector[i];
        }
        promedio = suma / vector.length;
        console.log(`El promedio de los numeros es:${promedio} y la suma total es: ${suma}`);
    }, 4000);

}



function desviacionEstandar(callback1, callback2, vector) {
    callback1(vector);
    callback2(vector);
    setTimeout(() => {
        sumaF = 0
        for (let i = 0; i < vector.length; i++) {
            sumaP = Math.pow(vector[i] - promedio, 2);
            sumaF = sumaF + sumaP;
        }
        varianza = Math.sqrt(sumaF / vector.length, 2);

        console.log("La desviacion estandar es de: ", varianza)
    }, 6000);
}

desviacionEstandar(rellenar, promedio, vector = []);