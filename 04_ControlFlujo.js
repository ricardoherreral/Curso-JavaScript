/**
 *  Control de flujo
 */

//Estructura IF ayuda a evaluar si la condicion se cumple o no 

// if(condicion){
    
// }

var llueve = false;
if (llueve) {
    console.log('Necesito una sombrilla');
}

var administrador = 'administradora';
if (administrador === 'administrador') {
    console.log('Acceso con exito');
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 16;

if (edadPersona >= MAYORIA_DE_EDAD){
    console.log('Es mayor de edad');
}else{
    console.log('Es menor de edad');
}

var semaforo = 'amarillo';
if (semaforo === 'verde') {
    console.log('Arranca');
} else if(semaforo === 'amarillo') {
    console.log('Listo');
} else if( semaforo === 'rojo'){
    console.log('Motores Apagados');
}else{
    console.log('El color no existe');
}

/**
 * Estructura SWITCH hace comparacion estricta ===
 */

// switch (expresion) {
//     case valorDeLaExpresion:
        //codigo
//         break;
//     case valorDeLaExpresion:
        //codigo
//         break;
//     default:
//         break;
// }

var producto ='mango';

switch (producto) {
    case 'papaya':
    case 'naranja':
        console.log('Las papayas y naranjas cuestan 1 dolar cada libra');
        break;
    
    case 'mango':
        console.log('El mango cuesta 2 dolares cada libra');
        break;
    
    default:
        console.log('No disponemos de ese producto');
        break;
}