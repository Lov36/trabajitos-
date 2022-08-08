var x = []; //arreglos llaves
//Organizado por indices
x[0] = 100;
x[2] = 3;
console.log(x);

var objeto = {}
    //objeto literal
    //organizado por parejas claves:valor;
    //Los valores pueden ser de cualquier tipo de dato
    //incluso datos compuestos como otros arreglos u objetos
    //Operador punto. Sirve para acceder a una clave en particular
const aprendiz = {
    nombre: "Maria",
    documento: 12345,
    competencias: ["diseño", "análisis", "desarrollo"],
    formacion: { programa: "Prg de software", ficha: 2453232, },
};
console.log(aprendiz.documento)
aprendiz.area = 'software';
console.log(aprendiz.ficha)
aprendiz.nombre = 'Maria Jose';
console.log(aprendiz)
aprendiz.competencias.push('Deporte');
console.log(aprendiz.competencias);
console.log(aprendiz)
aprendiz.formacion.jornada = 'diurna';
console.log(aprendiz)
aprendiz.formacion.jornada = 'mañana';
console.log('objeto original', aprendiz)
var aprendiz2 = aprendiz; //recuerden var b=a;
console.log('Objeto copiado', aprendiz2);
//console.log('.....'+aprendiz2.documento);
aprendiz2.sede = 'Soacha';
console.log('objeto original modif', aprendiz)
console.log('Objeto copiado modif', aprendiz2);



//ejercicio de operaciones basicas 

const literal = {
    numerador1: 3,
    denominador1: 4,
    numerador2: 3,
    denominador2: 6,
}

if (literal.denominador1 != literal.denominador2) {
    pro1 = literal.numerador1 * literal.denominador2
    pro2 = literal.denominador1 * literal.numerador2
    spro1 = pro1 + pro2
    pro3 = literal.denominador1 * literal.denominador2
    rpro1 = pro1 - pro2
    console.log(`la suma de las fracciones es: ${spro1}/${pro3}`)
    console.log(`la resta de las fracciones es: ${rpro1}/${pro3}`)

} else if (literal.denominador1 == literal.denominador2) {
    pro4 = literal.numerador1 + literal.numerador2
    rpro2 = literal.numerador1 - literal.numerador2
    console.log(`la suma de las fracciones es: ${pro4}/${literal.denominador2}`)
    console.log(`la resta de las fracciones es: ${rpro2}/${literal.denominador2}`)
}


mul1 = literal.numerador1 * literal.numerador2
mul2 = literal.denominador1 * literal.denominador2
console.log(`la multiplacion de las fracciones es: ${mul1}/${mul2}`)


div1 = literal.numerador1 * literal.denominador2
div2 = literal.denominador1 * literal.numerador2
console.log(`la division de las fracciones es: ${div1}/${div2}`)