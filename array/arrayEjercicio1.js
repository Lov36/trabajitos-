
suma=0
maximo=0
menor=100
var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector);
//suma
for (let i = 0; i < vector.length;  i++) {
        suma=suma+vector[i];
}
console.log(`La suma de los numeros es: ${suma}`);



//promedio
for (let i = 0; i < vector.length;  i++) {
        promedio=suma/vector.length;
}
console.log(`El promedio de los numeros es: ${promedio}`);



//maximo
for (let i = 0; i < vector.length;  i++) {
        if (vector[i]>maximo) {
            maximo=vector[i];
        }
}
console.log(`El numero mayor es: ${maximo}`);




//menor
for (let i = 0; i < vector.length;  i++) {
        if (vector[i]<menor) {
            menor=vector[i];
        }
}   
console.log(`El numero menor es: ${menor}`);

//mediana
for (let i = 0; i < vector.length;  i++) {
        sum2=vector[9] + vector[10]
        mediana=sum2/2
};
console.log(`La mediana es: ${mediana}`);
    
