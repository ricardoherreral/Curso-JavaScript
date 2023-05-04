/**
 * Tipos de datos
 */

// numero - number
console.log(12); //Se imprime el numero 12
console.log(43.12); //Se imprime un numero decimal

// texto - string
console.log("Ricardo Herrera");
console.log("Alberto Lopez");
console.log(`Hola, soy Ricardo`);

// Logicos - booleans
console.log(true);
console.log(false);

// indefinido - undefined
console.log(undefined);

// nulo - null
console.log(null);

/*
 * Tipos de datos estructurales
 */

// Objeto - object

console.log({
  nombre: "Ricardo",
  edad: 21,
  fechaDeNacimiento: null,
  esAlto: true,
  ciudades: ["Morelia", "Ciudad de Mexico", "Quito", "Medellin"],
  direccion: { callePrincipal: "Acueducto", numeroCasa: 29, casaGrande: true },
});
var datos = { nombre: "Ricardo", edad: 21, fechaDeNacimiento: null };
console.log(datos);

// lista - array
console.log(["Mexico", "Venezuela", "Ecuador"]);

console.log([21, true, { nombre: "Ricardo" }, [1, 2, 3, 4, 5]]);
