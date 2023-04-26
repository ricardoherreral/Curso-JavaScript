/**
 * 1. Escribir un programa que calcule el número de segundos que existen en un día.
Para ello debemos multiplicar los segundos de un minuto, por los minutos de
una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */

var conta= 0;
var horas = 24;
var minutos = 60;
var segundo = 60;

conta = segundo;
conta *= minutos;
conta *= horas;
console.log('Existen '+conta+' segundos en un dia');

/**
 * 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,
calcule el área de un rectángulo.
 */

var ancho = 2;
var alto = 5;
var res = ancho * alto;
console.log(res);

/**
 * 3. Hacer un conversor de grados centígrados a grados Fahrenheit.
    Para ello deberé multiplicar por 9/5 y sumar 32.
    Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */

var cel = 22;
var far = ( cel * (9 / 5) ) + 32; 
console.log(cel+' grados Celcius equivalen a '+far+' Farenheit');