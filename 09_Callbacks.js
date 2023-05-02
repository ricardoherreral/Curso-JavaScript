/**
 * Callbacks
 */

//Funciones que se pasan commo parametro a otras funciones
// Para que una vez finalizada se ejecute la función enviada como parametro

const suma = (a, b, cb) => {
    cb(a + b)
}

const imprimir = (data) => console.log(data)

suma(1, 2, imprimir)

// *******

const getData = (cb, cbError) => {
    if (false) {
        setTimeout(() => {
            cb({
                nombre: 'Ricardo',
                apellido: 'Herrera',
            })
        }, 3000);
    } else {
        cbError(new Error('No se pudo obtener los datos'))
    }
}

const imprimirData = (data) => console.log(data)
const errorHandler = (error) => console.log(error)

getData(imprimirData, errorHandler)