// Javascript ejecuta todo el programa en un solo proceso
// El asincronismo nos permite delegar procesos extensos a subprocesos
// Para después volver al proceso principal
// Se le conoce como proceso no bloqueante

console.log('Tarea 1')
console.log('Tarea 2')
console.log('Tarea 3')

setTimeout(() => {
    console.log('Tarea 4')
}, 2000)

console.log('Tarea 5')

