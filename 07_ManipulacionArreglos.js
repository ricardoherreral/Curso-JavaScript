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
// Limpiar el arreglo o agregar cosas al objeto

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


// FILTER
// Es un metodo inmutable, no modifica el arreglo de origen

var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'Ricardo', edad: 22, matriculado: true },
    { nombre: 'Jorge', edad: 21, matriculado: false },
    { nombre: 'Karina', edad: 19, matriculado: true },
    { nombre: 'Gabriel', edad: 23, matriculado: false },
    { nombre: 'Raul', edad: 18, matriculado: false },
]

//var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21)
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado)
console.log(filtrado)


// Reduce
// Reduce un arreglo a un solo valor (puede ser un valor numerico, string o boolean)

var calificaciones = [3, 5, 9, 10, 10]
var suma = calificaciones.reduce((acumuladorCalif, itemCalif) => acumuladorCalif + itemCalif, 0)
console.log(calificaciones)
console.log(suma)
console.log(suma / calificaciones.length)

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23]
// Salida
// {
//     21:3,
//     43:2,
// }
var resultado = edades.reduce((acumulador, edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1
    } else {
        acumulador[edad]++
    }
    return acumulador
}, {})
console.log(edades)
console.log(resultado)

// Cuanto dinero hay de todas las ventas por producto
var ventas = [
    { nombre: 'camiseta', precio: 15, totalVendido: 10 },
    { nombre: 'zapatos', precio: 150, totalVendido: 8 },
    { nombre: 'pantalon', precio: 20, totalVendido: 30 },
]

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido
    acumulador[producto.nombre] = `$${totalVentas}`
    return acumulador
}, {})
console.log(ventas)
console.log(resultado)

//Saber que estudiantes son matriculados con reduce y map
var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'Ricardo', edad: 22, matriculado: true },
    { nombre: 'Jorge', edad: 21, matriculado: false },
    { nombre: 'Karina', edad: 19, matriculado: true },
    { nombre: 'Gabriel', edad: 23, matriculado: false },
    { nombre: 'Raul', edad: 18, matriculado: false },
]

// Se pueden encadenar ya que map decuelve un arreglo, se puede seguir manipulando
var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) => {
        if (item) {
            acumulador.matriculado += 1
        } else {
            acumulador.noMatriculado += 1
        }
        return acumulador
    }, { matriculado: 0, noMatriculado: 0 })


console.log(estudiantes)
console.log(resultado)


// some  -  every
// some dentro de un arreglo ayuda a verificar si uno de los elementos del arreglo cumple con la condicion y retorna un boolean

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var numeros1 = [1, 3, 5, 7, 9]
var resultado = numeros1.some((numero) => numero % 2 === 0)
var resultado2 = numeros.some((numero) => numero % 2 === 0)
console.log(resultado)
console.log(resultado2)


// EVERY
// Every retorna un valor logico si todos cumplen con la condicion

//var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var numeros = [2, 4, 6, 8, 10]
var resultado = numeros.every((numero) => numero % 2 === 0)
console.log(resultado)


// find  -  findIndex

// FIND
// Es una funcion inmutable, busca elementos y los retorna como un nuevo arreglo
// Unicamente retorna un elemento y es el primero que encuentre en la busqueda

var clientes = [
    { id: 1, nombre: 'Ricas' },
    { id: 2, nombre: 'Ada' },
    { id: 1, nombre: 'Katrina' },
    { id: 4, nombre: 'Dayana' },
    { id: 5, nombre: 'Pamela' },
]

var cliente = clientes.find((cliente) => cliente.id === 1)
var filter = clientes.filter((cliente) => cliente.id === 1)
console.log(clientes)
console.log(cliente)
console.log(filter)

// findIndex
// Retorna la posicion

var clientes = [
    { id: 1, nombre: 'Ricas' },
    { id: 2, nombre: 'Ada' },
    { id: 1, nombre: 'Katrina' },
    { id: 4, nombre: 'Dayana' },
    { id: 5, nombre: 'Pamela' },
]

var posicion = clientes.findIndex((cliente) => cliente.id === 2)
console.log(posicion)
console.log(clientes[posicion])


// includes

var mascotas = ['perro', 'gato', 'conejo']

var resultado = mascotas.includes('perro')
var resultado2 = mascotas.includes('o')
console.log(resultado)
console.log('ricardo'.includes('ri'))

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'Ricas' },
        { id: 2, nombre: 'Ada' },
        { id: 1, nombre: 'Katrina' },
        { id: 4, nombre: 'Dayana' },
        { id: 5, nombre: 'Pamela' },
    ]

    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('na'))


// join
// Metodo que ayuda a unir un arreglo a un string a partir de esa union
// Se usa para los csv's

var elementos = ['aire', 'fuego', 'agua']
var resultado = elementos.join(', ')
var resultado1 = elementos.join()
console.log(resultado)
console.log(resultado1)

// No puedes hacer un arreglo de objetos con join
var clientes = [
    { id: 1, nombre: 'Ricas' },
    { id: 2, nombre: 'Ada' },
    { id: 1, nombre: 'Katrina' },
    { id: 4, nombre: 'Dayana' },
    { id: 5, nombre: 'Pamela' },
]

console.log(clientes.join())



var clientes = [
    { id: 1, nombre: 'Ricas' },
    { id: 2, nombre: 'Ada' },
    { id: 1, nombre: 'Katrina' },
    { id: 4, nombre: 'Dayana' },
    { id: 5, nombre: 'Pamela' },
]

//console.log(clientes.join())

var csvGen = (array, separador = ',') => {
    let headers = Object.keys(array[0]).join(separador)
    let data = array.map((element) => Object.values(element)).join(separador)
    console.log(headers)
    console.log(data)
}

csvGen(clientes)

// Object.values y .keys

console.log(Object.values({ id: 5, nombre: 'Pamela' }))
console.log(Object.keys({ id: 5, nombre: 'Pamela' }))


// concat   -  sort  - splice  -  slice

// concat
// Concatena 2 arreglos

var array1 = [1, 2, 3, 4, 5]
var array2 = [6, 7, 8, 9, 0]

var array3 = array1.concat(array2)
var array4 = [...array1, ...array2]
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)

// Sort

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(array1.sort())

//Lo ordena en base al codigo ascii
var meses = ['Dic', 'Ene', 'Mar', 'Feb']
console.log(meses.sort())

var array = [1, 10000, 21, 30, 4]
var ordenado = array.sort((a, b) => a - b)
console.log(ordenado)

var array = [1, 10000, 21, 30, 4]
var ordenado = array.sort((a, b) => b - a)
console.log(ordenado)

// splice
// Ayuda a remmover o modificar elementos de un array

var nombres = ['Ricardo', 'Alberto', 'Dayana']
nombres.splice(1, 1, 'Ada')
console.log(nombres)

// slice

var nombres = ['Ricardo', 'Alberto', 'Dayana']
var resultado = nombres.slice(1, 3) // No incluye la ultima posicion
console.log(nombres)
console.log(resultado)