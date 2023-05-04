/**
 * Variables
 *
 *  3 formas de definir variables
 *
 * PALABRAS RESERVADAS:
 *
 * var
 * let
 * const
 */

// Variables con VAR
var nombre = "Ricardo";
var edad = 21;
var esAlto = true;

console.log(nombre);
console.log(edad);
console.log(esAlto);
``
// Tipos de datos estructurales

var persona = {
  nombre: "Ricardo",
  apellido: "Herrera",
  edad: 21,
  direccion: {
    calle: "Vicente Suarez",
    numero: 29,
  },
  ciudadesVisitadas: ["CDMX", "Los Angeles", "Los Mochis", "San Diego"],
};

var ciudad; //Defini la variable
console.log("Sin definir: " + ciudad); //Aun no esta definida la variable ciudad
ciudad = "Morelia";
console.log(ciudad);
ciudad = "Patzcuaro";
console.log(ciudad);
ciudad = 13;
console.log(ciudad); //No se necesita especificar que tipo de dato es el que se almacena

console.log("Ciudades Visitadas: " + persona.ciudadesVisitadas);

/**
 * ----------------------------------------------------------------
 *                       VARIABLES CON LET
 * ----------------------------------------------------------------
 */

let nombre = 'Ricardo';
console.log(nombre);

//Bloque de codigo

{
    let saludo = 'Hola soy Ricardo';
    console.log(saludo);
}

console.log(saludo); //Marca error porque saludo solo existe en el bloque de codigo donde fue creado


{
    var saludo = 'Hola soy Ricardo';
    console.log(saludo);
}

console.log(saludo); //Var se puede usar en cualquier parte del codigo y let solo se usa en un bloque de codigo, fuera de ese bloque no existe

/**
 * ----------------------------------------------------------------
 *                       VARIABLES CONST
 * ----------------------------------------------------------------
 */

//Son variables que no cambian
//Las variables constantes se acostumbra a escribirlas en mayusculas y si son muchas palabras se separan con guiones bajos
const NUMERO_PI = 3.14;
console.log(NUMERO_PI);

const NUMERO_PI; //LANZA ERROR DE SINTAXIS POR QUE NO SE INICIALIZO
console.log(NUMERO_PI);

// Template STRING es con comillas invertidas, permite los espacios entre lineas y la adicion de variables con ${nombreVariable} dentro de las comillas

var nombre = 'Ricardo';
var saludo = `Hola soy 

como estas? 
${nombre}`;
console.log(saludo);
nombre = 'Alberto';
