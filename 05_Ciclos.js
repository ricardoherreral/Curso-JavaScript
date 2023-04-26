/**
 * Ciclos
 */

//While

// while (condition) {

// }

console.log('Hola mundo!');//Repetirlo varias veces para eso sriven los ciclos

var cont = 0;
while (cont <= 5) {
    console.log('Hola mundo!');
    cont++;
}

// Do While

// do {
//Se ejecuta por lo menos una vez el codigo dentro del ciclo    
// } while (condition);

var cont = 1;
do {
    console.log('Hola mundo ' + cont);
    cont++;
} while (cont <= 10);

// For
for (let i = 0; i < 5; i++) {
    console.log('Hola for');
}


// For in
var persona = {
    nombre: 'Ricardo',
    apellido: 'Herrera',
    edad: 22
}

for (let clave in persona) {
    console.log(clave, persona[clave]);
}

//For of
// Itera objetos para obtener datos internos de la colección
var arreglo = [1, 2, 3, 4, 5]
for (let valor of arreglo) {
    console.log(valor)
}


