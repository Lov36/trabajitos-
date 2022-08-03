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