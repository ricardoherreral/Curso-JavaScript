/**
 *  Operadores
 */

/**
 *  Operadores de Asignacion
 */

//Operador de asignacion

var x = 2; //El operador de asignacion es el =
var y = true;

// Operador de asignacion de adicion( += )

var x = 2;
var y = 1;
x += y; //Hace que a x se le sume y y se guarda en x (x = x + y)
console.log(x);

// Operador de asignacion de sustraccion ( -= )
var x = 2;
var y = 1;
x -= y; //Hace que a x se le reste y y se guarda en x (x = x - y)
console.log(x);

// Operador de asignacion de multiplicacion ( *= )
var x = 2;
var y = 3;
// x = x * y
x *= y;
console.log(x);

//Operador de asignacion de Division ( /= )
var x = 6;
var y = 3;
// x = x / y
x /= y;
console.log(x);

// Operador de asignacion de residuo ( %= )
var x = 1;
var y = 2;
// x = x % y
x %= y;
console.log(x);

// Operador de asignacion de exponenciacion ( **= )
var x = 2;
var y = 3;
// x = x ** y
x **= y;
console.log(x);

/**
 * Operadores de comparacion siempre regresan un valor logico
 */

//Operador igual ( == )

console.log(3 == 3); 
//Regresa un valor logico (true o false)

console.log(3 == '3');//Es una desventaja del tipado

//Operador no es igual ( diferente ) ( != )
console.log(3 != 3);
console.log(3 != 2);

//Operador estrictamente igual ( === )
console.log(3 === 3);
console.log(3 === '3'); //Da false porque es mas estricto que ( == )

//Operador de desigualdad estricta ( !== )
console.log(3 !== 4);
console.log(3 !== '3');

//Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 2);

/**
 * Operadores aritmeticos
 * 
 * +, -, *, /, %, **
 */

console.log(2 + 2); //Suma
console.log(2 - 2); //Resta
console.log(2 * 2); //Multiplicacion
console.log(2 / 2); //Division
console.log(2 % 2); //Modulo
console.log(2 ** 2); //Potencia

//Operadores de incremento ( ++ )
var num = 0;
console.log(num);
console.log(++num); //Primero suma 1 al numero y despues imprime
console.log(num++); //Primero imprime y despues suma
console.log(++num);

//Operadores de decremento ( -- )
var num = 3;
console.log(--num);
console.log(num--); //Sucede lo mismo que en el caso de arriba
console.log(--num);


/**
 * Operadores Logicos
 */

// AND 

console.log(true && true);
console.log(3 > 2 && 1 < 2);

// OR ( || )

console.log(true || false);
console.log(false || false);

//NOT ( ! ) simbolo de negacion siempre al inicio
console.log(!true);
console.log(!false);

/**
 * 
 * Ultimos operadores
 * 
 */

//Operador de concatenacion para cadenas

var nombre = 'Ricardo';
var apellido = 'Herrera';

var nombresCompletos = nombre+" "+apellido;

console.log(nombresCompletos);

//Operador condicional  ( condicion ? val1 : val2 ) ( Condicion ? Si:No )
console.log( 2 > 3 ? 'El numero es mayor': 'Es menor');
console.log(3 != 2 ? 'El numero es diferente' : 'El numero es igual');

//Operador de desestructuracion 
//(necesita ser definido por una variable)
//
var persona = {
    nombre : 'Ricardo',
    apellido:'Herrera'
}

var { nombre:nom, apellido } = persona;
console.log(nom);
console.log(apellido);
console.log(persona);

//Operacion de desestructuracion de arreglos
var arreglo= [ 1,2,3,4,5 ];

var [primeraPos, segundaPos] = arreglo;
console.log(primeraPos);
console.log(segundaPos);

//Operador de miembro o acceso de propiedad
//Notacion punto
var persona= {
    nombre:'Ricardo',
    apellido:'Herrera'
}
console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes
var persona= {
    nombre:'Ricardo',
    apellido:'Herrera'
}
console.log(persona['nombre']);
console.log(persona['nombre']);
/**
 *  Operadores
 */

/**
 *  Operadores de Asignacion
 */

//Operador de asignacion

var x = 2; //El operador de asignacion es el =
var y = true;

// Operador de asignacion de adicion( += )

var x = 2;
var y = 1;
x += y; //Hace que a x se le sume y y se guarda en x (x = x + y)
console.log(x);

// Operador de asignacion de sustraccion ( -= )
var x = 2;
var y = 1;
x -= y; //Hace que a x se le reste y y se guarda en x (x = x - y)
console.log(x);

// Operador de asignacion de multiplicacion ( *= )
var x = 2;
var y = 3;
// x = x * y
x *= y;
console.log(x);

//Operador de asignacion de Division ( /= )
var x = 6;
var y = 3;
// x = x / y
x /= y;
console.log(x);

// Operador de asignacion de residuo ( %= )
var x = 1;
var y = 2;
// x = x % y
x %= y;
console.log(x);

// Operador de asignacion de exponenciacion ( **= )
var x = 2;
var y = 3;
// x = x ** y
x **= y;
console.log(x);

/**
 * Operadores de comparacion siempre regresan un valor logico
 */

//Operador igual ( == )

console.log(3 == 3); 
//Regresa un valor logico (true o false)

console.log(3 == '3');//Es una desventaja del tipado

//Operador no es igual ( diferente ) ( != )
console.log(3 != 3);
console.log(3 != 2);

//Operador estrictamente igual ( === )
console.log(3 === 3);
console.log(3 === '3'); //Da false porque es mas estricto que ( == )

//Operador de desigualdad estricta ( !== )
console.log(3 !== 4);
console.log(3 !== '3');

//Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 2);

/**
 * Operadores aritmeticos
 * 
 * +, -, *, /, %, **
 */

console.log(2 + 2); //Suma
console.log(2 - 2); //Resta
console.log(2 * 2); //Multiplicacion
console.log(2 / 2); //Division
console.log(2 % 2); //Modulo
console.log(2 ** 2); //Potencia

//Operadores de incremento ( ++ )
var num = 0;
console.log(num);
console.log(++num); //Primero suma 1 al numero y despues imprime
console.log(num++); //Primero imprime y despues suma
console.log(++num);

//Operadores de decremento ( -- )
var num = 3;
console.log(--num);
console.log(num--); //Sucede lo mismo que en el caso de arriba
console.log(--num);


/**
 * Operadores Logicos
 */

// AND 

console.log(true && true);
console.log(3 > 2 && 1 < 2);

// OR ( || )

console.log(true || false);
console.log(false || false);

//NOT ( ! ) simbolo de negacion siempre al inicio
console.log(!true);
console.log(!false);

/**
 * 
 * Ultimos operadores
 * 
 */

//Operador de concatenacion para cadenas

var nombre = 'Ricardo';
var apellido = 'Herrera';

var nombresCompletos = nombre+" "+apellido;

console.log(nombresCompletos);

//Operador condicional  ( condicion ? val1 : val2 ) ( Condicion ? Si:No )
console.log( 2 > 3 ? 'El numero es mayor': 'Es menor');
console.log(3 != 2 ? 'El numero es diferente' : 'El numero es igual');

//Operador de desestructuracion 
//(necesita ser definido por una variable)
//
var persona = {
    nombre : 'Ricardo',
    apellido:'Herrera'
}

var { nombre:nom, apellido } = persona;
console.log(nom);
console.log(apellido);
console.log(persona);

//Operacion de desestructuracion de arreglos
var arreglo= [ 1,2,3,4,5 ];

var [primeraPos, segundaPos] = arreglo;
console.log(primeraPos);
console.log(segundaPos);

//Operador de miembro o acceso de propiedad
//Notacion punto
var persona= {
    nombre:'Ricardo',
    apellido:'Herrera'
}
console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes 
var persona= {
    nombre:'Ricardo',
    apellido:'Herrera'
}
console.log(persona['nombre']);
console.log(persona['apellido']);

//Notacion por corchetes en arreglos
var arreglo = [21, 22, 23, 24, 25, 26];
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(arreglo[3]);
console.log(arreglo[4]);

//Operacion de determinacion de tipo ( typeof )
//De los mas importantes de javascript
console.log(typeof 'Ricas');
console.log(typeof 3);
console.log(typeof true);