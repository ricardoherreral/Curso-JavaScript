/*
    * Manipulación de Arreglos
*/

// ForEach

var letras = ['a', 'b', 'c', 'd', 'e']

// console.log(letras.length)

// for (let i = 0; i < letras.length; i++) {
//     const element = letras[i];
//     console.log(element)
// }

//Solo recorre los elementos de un arreglo
letras.forEach((element) => console.log(element))

// push  -  shift  -  pop
//Mutabilidad  es modificar algo 

//Agrega un valor al final del arreglo
var letras = ['a', 'b', 'c', 'd', 'e']
letras.push('f')
console.log(letras)

//Shift modifica el arreglo extrayendo el primer elemento (deja lo demas)
var letras = ['a', 'b', 'c', 'd', 'e']
letras.shift()
console.log(letras)

//Shift devuelve el valor para poder guardarlo en una variable
var letras = ['a', 'b', 'c', 'd', 'e']
var primerElemento = letras.shift()
console.log(primerElemento)

// Pop obtiene el ultimo elemento del arreglo y lo elimina del arreglo
var letras = ['a', 'b', 'c', 'd', 'e']
letras.pop()
console.log(letras)

// Pop tambien devuelve el valor para poder guardarlo en una variable
var letras = ['a', 'b', 'c', 'd', 'e']
var primerElemento = letras.pop()
console.log(primerElemento)

// MAP
//Es inmutable, nos devuelve un nuevo arreglo sin modificar el origen

var estudiantes = ['Ricardo', 'Pamela', 'Ada', 'Katrina']
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})
console.log(asistencia)


var estudiantes = ['Ricardo', 'Pamela', 'Ada', 'Katrina']
var asistencia = estudiantes.map((nombre) => `${nombre}.`)
console.log(asistencia)

// EJEMPLOS CON MAP

var productos = [
    { nombre: 'camisetas', precio: 15 },
    { nombre: 'zapatos', precio: 20 },
    { nombre: 'pantalon', precio: 25 },
]

var productosImpuesto = productos.map((producto) => {
    return {
        ...producto, //Usa una copia del objeto productos
        impuesto: .12
    }
})

console.log(productos)
console.log(productosImpuesto)

var precios = productos.map((producto) => producto.precio)
console.log(precios)