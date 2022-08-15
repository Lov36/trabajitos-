class Publicidad {
    constructor(titulo, precio) {
        this._titulo = titulo
        this._precio = precio
    }
    get titulo() {
        return `El titulo es: ${this._titulo}`;
    }

    get precio() {
        return `El precio es: ${this._precio}`
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }

    set precio(precio) {
        this._precio = precio;
    }
}

class Libro extends Publicidad {
    constructor(titulo, precio, nupaginas) {
        super(titulo, precio);
        this._nupaginas = nupaginas
    }
    get nupaginas() {
        return `EL numero de pagina es: ${this._nupaginas}`
    }
    set nupaginas(nupaginas) {
        this._nupaginas = nupaginas;
    }
}

class Disco extends Publicidad {
    constructor(titulo, precio, minutos) {
        super(titulo, precio);
        this._minutos = minutos
    }
    get minutos() {
        return `EL numero de minutos es: ${this._minutos }`
    }
    set minutos(minutos) {
        this._minutos = minutos;
    }
}

const lib1 = new Libro(`Cien años de soledad`, 150000, 450)
const bis1 = new Disco(`pelicula angeles`, 25000, 90)

console.log(lib1)
console.log(lib1.nupaginas)
lib1._titulo = "hola"
console.log(lib1.titulo)
console.log(bis1)
bis1._minutos = 180
console.log(bis1.minutos)





//******************************************************************************************************* */




//ejercicio 2

class Vehiculos {
    constructor(NSmotor, marca, año, precio) {
        this._NSmotor = NSmotor
        this._marca = marca
        this._año = año
        this._precio = precio

    }

    get NSmotor() {
        return `EL numero de serie es: ${this._NSmotor}`
    }

    set NSmotor(NSmotor) {
        this._NSmotor = NSmotor;
    }

    get marca() {
        return `La marca del vehiculo es: ${this._marca }`
    }

    set marca(marca) {
        this._marca = marca;
    }

    get año() {
        return `EL año del vehiculo es: ${this._año}`
    }

    set año(año) {
        this._año = año;
    }

    get precio() {
        return `EL numero de precio es: ${this._precio }`
    }
    set precio(precio) {
        this._precio = precio;
    }

    ToString() {
        return `EL numero de serie es: ${this._NSmotor}
            La marca del vehiculo es: ${this._marca }
            EL año del vehiculo es: ${this._año}
            EL numero de precio es: ${this._precio }`
    }
}

class AutosCompatos extends Vehiculos {
    constructor(NSmotor, marca, año, precio, Npasajeros) {
        super(NSmotor, marca, año, precio)
        this._Npasajeros = Npasajeros;
    }
    get Npasajeros() {
        return `Los pasajeros que puede transportar son ${this._Npasajeros}`
    }

    set Npasajeros(Npasajeros) {
        this._Npasajeros = Npasajeros
    }

    ToString() {
        return `EL numero de serie es: ${this._NSmotor}
            La marca del vehiculo es: ${this._marca }
            EL año del vehiculo es: ${this._año}
            EL numero de precio es: ${this._precio }
            Los pasajeros que puede transportar son ${this._Npasajeros}`
    }
}

class AutosLujo extends Vehiculos {
    constructor(NSmotor, marca, año, precio, Npasajeros) {
        super(NSmotor, marca, año, precio)
        this._Npasajeros = Npasajeros;
    }

    get Npasajeros() {
        return `Los pasajeros que puede transportar son ${this._Npasajeros}`
    }

    set Npasajeros(Npasajeros) {
        this._Npasajeros = Npasajeros
    }

    ToString() {
        return `EL numero de serie es: ${this._NSmotor}
            La marca del vehiculo es: ${this._marca }
            EL año del vehiculo es: ${this._año}
            EL numero de precio es: ${this._precio }
            Los pasajeros que puede transportar son ${this._Npasajeros}`
    }
}

class Camioneta extends Vehiculos {
    constructor(NSmotor, marca, año, precio, Kgs, ejes) {
        super(NSmotor, marca, año, precio)
        this._Kgs = Kgs;
        this._ejes = ejes;
    }

    get Kgs() {
        return `El peso que puede transportar es: ${this._Kgs}`
    }

    set Kgs(Kgs) {
        this._Kgs = Kgs
    }

    get ejes() {
        return `Los ejes  del vehiculo es: ${this._ejes}`
    }

    set ejes(ejes) {
        this._ejes = ejes
    }

    ToString() {
        return `EL numero de serie es: ${this._NSmotor}
            La marca del vehiculo es: ${this._marca }
            EL año del vehiculo es: ${this._año}
            EL numero de precio es: ${this._precio }
            El peso que puede transportar es: ${this._Kgs}Kgs
            Los ejes  del vehiculo es: ${this._ejes}`
    }
}

class Vagoneta extends Vehiculos {
    constructor(NSmotor, marca, año, precio, Npasajeros) {
        super(NSmotor, marca, año, precio)
        this._Npasajeros = Npasajeros;

    }

    get Npasajeros() {
        return `Los pasajeros que puede transportar son: ${this._Npasajeros}`
    }

    set Npasajeros(Npasajeros) {
        this._Npasajeros = Npasajeros
    }

    ToString() {
        return `EL numero de serie es: ${this._NSmotor}
            La marca del vehiculo es: ${this._marca }
            EL año del vehiculo es: ${this._año}
            EL numero de precio es: ${this._precio }
            Los pasajeros que puede transportar son ${this._Npasajeros}`
    }
}


const Va1 = new Vagoneta(0001, "Chevrolet", 2022, 85000000, 8)
const Cam1 = new Camioneta(0002, 'Ford', 2023, 125000000, 450, 4)
console.log(Va1.ToString())
Va1._año = 2021
console.log(Va1.ToString())
console.log(Cam1.ToString())