var coleccion = [
    { nombre: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez', obras: ["Doce cuentos peregrinos(Cuento. 1992)", "Relato de un náufrago(Reportaje novelado, 1970)", "Crónica de una muerte anunciada(Novela, 1981)"] },
    { nombre: 'Pedro Paramo', autor: 'Julian Rulfo', obras: ["Macario(2012)", "El gallo de oro(1980)", "El llano en llamas (1953)"] },
    { nombre: 'Siervo sin tierra', autor: 'Eduardo Caballero Calderon', obras: ["Historia en cuentos(1953)", "Diario de tipacoque(1950)", "El buen salvaje(1966) "] },
]

console.log(coleccion[1].obras[0])
coleccion.forEach(function(n) {
    console.log(n)
});


//this significa éste(a) o el(la) presente = (objeto, clase o función)
const aprendiz1 = {
    nombre: "Maria",
    documento: 12345,
    competencias: ["diseño", "análisis", "desarrollo"],
    formacion: { programa: "Prg de software", ficha: 2453232, },
    datosPersonales: function() {
        return `nombre...${this.nombre}, documento...${this.documento}`;
    }
}

const aprendiz2 = {
    nombre: "Pedro",
    documento: 54321,
    competencias: ["diseño", "análisis", "desarrollo", "ética"],
    formacion: { programa: "Prg de software", ficha: 2453232, },
    datosPersonales: function() {
        return `nombre...${this.nombre}, documento...${this.documento}`;
    }
}
console.log(aprendiz2.datosPersonales());

//Datos primitivos o simples
// let a;
// a=1;
// a='sena'
// a=4.2;