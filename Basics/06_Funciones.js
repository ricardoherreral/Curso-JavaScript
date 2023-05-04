/*
    FUNCIONES
*/

// // Declarativa
// function nombreDeLaFuncion () {
//     //Cuerpo de la función

// }

function saludar() {

    console.log('Hello world')

}

saludar()


function saludar(nombre) {
    console.log(`Hola soy ${nombre}`)
}

saludar('Ricardo')


function saludar(nombre) {
    return `Hola soy ${nombre}`
}

let saludo = saludar('Ricardo')
console.log(saludo)
console.log(saludar('Ricardo'))

// Expresión o anónimas
var suma = function (a, b) {
    return a + b
}

console.log(suma(4, 5))

// Arrow function
var resta = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b
    } else return 'Solo puede restar numeros'
}
console.log(resta(10, 2))


var multiplicar = (a, b) => a * b
console.log(multiplicar(2, 5))

