/*Ejercicios Control de Flujos

1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
*/

var dia = 'Domingo';

switch (dia) {
    case 'Lunes':
        console.log('Monday');
        break;
    case 'Martes':
        console.log('Tuesday');
        break;
    case 'Miercoles':
        console.log('Wednesday');
        break;
    case 'Jueves':
        console.log('Thursday');
        break;
    case 'Viernes':
        console.log('Friday');
        break;
    case 'Sabado':
        console.log('Saturday');
        break; 
    case 'Domingo':
        console.log('Sunday');
        break; 
    default:
        console.log('Ese dia no existe');
}

/*
    2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
Si la compra supera los $50 el gasto de envío será gratuito
El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
*/

var compra = 55;

    if (compra <= 10) {
        console.log('El total de su compra es $'+compra+' y el envio sera de $3');
    } else if (compra <= 20 && compra > 10) {
        console.log('El total de su compra es $'+compra+' y el envio sera de $5');
    } else if (compra <= 50 && compra > 20) {
        console.log('El total de su compra es $'+compra+' y el envio sera de $7');
    } else if (compra > 50) {
        console.log('El total de su compra es $'+compra+' y el envio sera gratuito');
    }