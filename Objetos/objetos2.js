var coleccion=[
    {nombre: 'Cien años de soledad',autor: 'Gabriel Garcia Marquez',obras:["Doce cuentos peregrinos(Cuento. 1992)","Relato de un náufrago(Reportaje novelado, 1970)","Crónica de una muerte anunciada(Novela, 1981)"]},
    {nombre: 'Pedro Paramo',autor: 'Julian Rulfo',obras:["Macario(2012)","El gallo de oro(1980)","El llano en llamas (1953)"]},
    {nombre: 'Siervo sin tierra',autor:'Eduardo Caballero Calderon',obras:["Historia en cuentos(1953)","Diario de tipacoque(1950)","El buen salvaje(1966) "]},
]

console.log(coleccion[1].obras[0])
coleccion.forEach(function(n) {
    console.log(n)
});


