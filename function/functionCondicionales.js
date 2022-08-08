// 1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
// valor del medio es 11. No use operadores lógicos(2 operadores logicos)

function medio(vector) {
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
    console.log(`El numero del medio es ${vector[1]}`)
}
var vector2 = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
medio(vector2)


//flecha
var medioF = vector => {
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
    console.log(`El numero del medio es ${vector[1]}`)
}
medioF(vector2)



// 3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número 
// exceda los límites emita un mensaje y finalice el programa
function cifras(numero) {
    var numero;
    let cifras = 1;

    while (numero >= 10) {
        numero /= 10;
        cifras++
    }
    console.log(`tiene ${cifras} cifras `)

}

cifras(Math.round(Math.random() * 10000))

//flecha
let cifrasF = numero => {
    var numero;
    let cifras = 1;

    while (numero >= 10) {
        numero /= 10;
        cifras++
    }
    console.log(`tiene ${cifras} cifras `)

}

cifrasF(Math.round(Math.random() * 10000))




// 8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo 
// los cálculos así:
// Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 
// 200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que 
// permita calcular el costo de una llamada dados los minutos de duración.

function tele(tel) {
    var a = tel;
    var pre1 = 200;
    var mayor = a - 3;
    var pre2 = 200 + (mayor * 50)
    if (a <= 3) {
        console.log(`Su llamada duro ${a} min, el costo es ${pre1}`)
    } else if (a > 3) {
        console.log(`Su llamada duro ${a} min, el costo es ${pre2}`)
    }

}

tele(Math.round(Math.random() * 100))

//flecha
let teleF = tel => {
    var a = tel;
    var pre1 = 200;
    var mayor = a - 3;
    var pre2 = 200 + (mayor * 50)
    if (a <= 3) {
        console.log(`Su llamada duro ${a} min, el costo es ${pre1}`)
    } else if (a > 3) {
        console.log(`Su llamada duro ${a} min, el costo es ${pre2}`)
    }
}
teleF(Math.round(Math.random() * 100))


//9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
//ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es
//posterior
//12/06/2020
function transcurrido(d, m, a) {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();
    var d;
    var m;
    var a;

    var x = dia - d;
    var v = mes - m;
    var j = año - a;

    if (x < 0 && v < 0 && j < 0) {
        var y = Math.abs(x);
        var w = Math.abs(v);
        var l = Math.abs(j);
        console.log(`Han transcurrido ${y} dias, ${w} meses y ${l} años de la fecha actual`)
    } else if (x > 0 && v > 0 && j > 0) {
        console.log(`Faltan ${x} dias, ${v} meses y ${j} años, para llegar a la fecha actual`)
    } else if (x == 0 && v == 0 && j == 0) {
        console.log(`Es la fecha actual tambien`)
    } else if (x < 0 || v < 0 && j < 0) {
        var d = Math.abs(x);
        var e = Math.abs(v);
        var f = Math.abs(j);
        console.log(`Ha transcurrido ${f} años y falta ${d} dias y ${e} meses de la fecha actual`)
    } else if (x > 0 || v > 0 && j > 0) {
        var g = Math.abs(x);
        var h = Math.abs(v);
        var i = Math.abs(j);
        console.log(`Falta ${i} años y ha transcurrido ${g} dias, ${h} meses de la fecha actual`)
    }
}
transcurrido(3, 3, 2022)


//flecha
let transcurridoF = (d, m, a) => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();
    var d;
    var m;
    var a;

    var x = dia - d;
    var v = mes - m;
    var j = año - a;

    if (x < 0 && v < 0 && j < 0) {
        var y = Math.abs(x);
        var w = Math.abs(v);
        var l = Math.abs(j);
        console.log(`Han transcurrido ${y} dias, ${w} meses y ${l} años de la fecha actual`)
    } else if (x > 0 && v > 0 && j > 0) {
        console.log(`Faltan ${x} dias, ${v} meses y ${j} años, para llegar a la fecha actual`)
    } else if (x == 0 && v == 0 && j == 0) {
        console.log(`Es la fecha actual tambien`)
    } else if (x < 0 || v < 0 && j < 0) {
        var d = Math.abs(x);
        var e = Math.abs(v);
        var f = Math.abs(j);
        console.log(`Ha transcurrido ${f} años y falta ${d} dias y ${e} meses de la fecha actual`)
    } else if (x > 0 || v > 0 && j > 0) {
        var g = Math.abs(x);
        var h = Math.abs(v);
        var i = Math.abs(j);
        console.log(`Falta ${i} años y ha transcurrido ${g} dias, ${h} meses de la fecha actual`)
    }
}
transcurridoF(3, 3, 2022)

//6. Pida un numero al usuario que representa días del año. Diga a que mes del año
//corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
//Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
//cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.

function dm(day) {

    var day;
    if (day >= 1 && day <= 31) {
        console.log("Tu numero corresponde al mes de ENERO!")
    } else if (day >= 32 && day <= 59) {
        console.log("Tu numero corresponde al mes de FEBRERO!")
    } else if (day >= 60 && day <= 90) {
        console.log("Tu numero corresponde al mes de MARZO!")
    } else if (day >= 91 && day <= 120) {
        console.log("Tu numero corresponde al mes de ABRIL!")
    } else if (day >= 121 && day <= 151) {
        console.log("Tu numero corresponde al mes de MAYO!")
    } else if (day >= 152 && day <= 181) {
        console.log("Tu numero corresponde al mes de JUNIO!")
    } else if (day >= 182 && day <= 212) {
        console.log("Tu numero corresponde al mes de JULIO!")
    } else if (day >= 213 && day <= 243) {
        console.log("Tu numero corresponde al mes de AGOSTO!")
    } else if (day >= 244 && day <= 274) {
        console.log("Tu numero corresponde al mes de SEPTIEMBRE!")
    } else if (day >= 275 && day <= 305) {
        console.log("Tu numero corresponde al mes de OCTUBRE!")
    } else if (day >= 306 && day <= 335) {
        console.log("Tu numero corresponde al mes de NOVIEMBRE!")
    } else if (day >= 336 && day <= 366) {
        console.log("Tu numero corresponde al mes de DICIEMBRE!")
    } else {
        console.log("Lo sentimos tu numero excedio el limite y no corresponde")
    } {} {} {} {} {} {} {} {} {} {} {}
}

dm(Math.round(Math.random() * 400))


//flecha
let dmF = day => {
    var day;
    if (day >= 1 && day <= 31) {
        console.log("Tu numero corresponde al mes de ENERO!")
    } else if (day >= 32 && day <= 59) {
        console.log("Tu numero corresponde al mes de FEBRERO!")
    } else if (day >= 60 && day <= 90) {
        console.log("Tu numero corresponde al mes de MARZO!")
    } else if (day >= 91 && day <= 120) {
        console.log("Tu numero corresponde al mes de ABRIL!")
    } else if (day >= 121 && day <= 151) {
        console.log("Tu numero corresponde al mes de MAYO!")
    } else if (day >= 152 && day <= 181) {
        console.log("Tu numero corresponde al mes de JUNIO!")
    } else if (day >= 182 && day <= 212) {
        console.log("Tu numero corresponde al mes de JULIO!")
    } else if (day >= 213 && day <= 243) {
        console.log("Tu numero corresponde al mes de AGOSTO!")
    } else if (day >= 244 && day <= 274) {
        console.log("Tu numero corresponde al mes de SEPTIEMBRE!")
    } else if (day >= 275 && day <= 305) {
        console.log("Tu numero corresponde al mes de OCTUBRE!")
    } else if (day >= 306 && day <= 335) {
        console.log("Tu numero corresponde al mes de NOVIEMBRE!")
    } else if (day >= 336 && day <= 366) {
        console.log("Tu numero corresponde al mes de DICIEMBRE!")
    } else {
        console.log("Lo sentimos tu numero excedio el limite y no corresponde")
    } {} {} {} {} {} {} {} {} {} {} {}
}
dmF(Math.round(Math.random() * 400))