class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }

}


//INSTANCIACION DE OBJETOS - operador new
//let x=10; similar a declarar variables
let prod1 = new Producto('computador', 4000000);
console.log(prod1.nombre);
console.log(prod1.precio);
prod1.nombre = "computador portatil";
prod1.precio = 5000000
console.log(prod1.nombre);
console.log(prod1.precio);



// let prod2=new Producto('Celular',3000000);
// console.log(prod1);
// console.log(typeof(prod1));
// console.log(prod2);
// console.log(typeof(prod2));

class Persona {
    constructor(nombre, documento) {
        this._nombre = nombre;
        this._documento = documento;
    }

    get nombre() {
        return this._nombre;
    }

    get documento() {
        return this._documento;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set documento(documento) {
        this._documento = documento;
    }



}

const persona1 = new Persona('Juan', '12345678');
console.log(typeof(persona1));

class Aprendiz extends Persona {
    constructor(nombre, documento, ficha, programa) {
        super(nombre, documento);
        this._ficha = ficha;
        this._programa = programa;
    }
    get ficha() {
        return this._ficha;
    }

    get programa() {
        return this._programa;
    }

    set ficha(ficha) {
        this._ficha = ficha;
    }

    set programa(programa) {
        this._programa = programa;
    }


}

const aprendiz1 = new Aprendiz('Juan', 12345678, 1, 'programacion');
console.log(aprendiz1);