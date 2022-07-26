var a = Math.round(Math.random() * 100);
var b = Math.round(Math.random() * 100);
var c = Math.round(Math.random() * 100);

if (a == b && a == c && b == c) {
    console.log("Los tres numeros son iguales ")
} else if (a == b || b == c || a == c) {
    console.log("Dos numeros son iguales ")
} else if (a != b && a != c && b != c) {
    console.log("Los tres numeros son distintos ")
}