class Poligono {
    constructor(lados, base, altura) {
        this._lados = lados;
        this._base = base;
        this._altura = altura;
    }

}

class cuadrado extends Poligono {
    constructor(lados) {
        super(lados);

    }
    perimetrocuadrado(_lados) {
        return 4 * this._lados

    }
    areacuadrado(_lados) {

        return Math.pow(this._lados, 2)
    }

}

class triangulo extends Poligono {
    constructor(lados, base, altura) {
        super(lados, base, altura);

    }
    perimetrotriangulo() {
        return 3 * this._lados
    }
    areatriangulo() {
        return (this.base + this.altura) / 2
    }
}

class rectangulo extends Poligono {
    constructor(base, altura) {
        super(base, altura);

    }
    perimetrorectangulo() {
        return ((2 * this._base) + (2 * this._altura))
    }
    arearectangulo() {
        return this._altura * this._base
    }
}

const cua1 = new cuadrado(3)
const rect1 = new rectangulo(5, 3)
const tri1 = new triangulo(6, 6, 5.19)
console.log(cua1.perimetrocuadrado(this.lados))
console.log(cua1.areacuadrado(this.lados))
console.log(rect1.perimetrorectangulo(this.base, this.altura))
console.log(rect1.arearectangulo(this.base, this.altura))
console.log(tri1.perimetrotriangulo())
console.log(tri1.areatriangulo())


class Cuenta {
    constructor(balance, saldo, numero, ) {
        this._balance = balance;
        this._saldo = saldo;
        this._numero = numero;
    }

    get numero() {
        return this._nombre;
    }

    get saldo() {
        return this._documento;
    }

    set numero(numero) {
        this._numero = numero;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
}

class CuentaAhorros extends Cuenta {
    constructor(balance) {
        super(balance)
    }
}

class cuentacorriente extends Cuenta {
    constructor(balance)
    super(balance)
}