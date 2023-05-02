/**
 * Promises
 */

//Nos ayudan a controlar funciones dentro de js, si se resuelven correctamente
// hace el callback del error automatico

// function getData() {
//     return new Promise((resolve, reject) => {

//     })
// }

// const getData1 = new Promise((resolve, reject) => {})

const getData = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Ricardo',
                apellido: 'Herrera',
            })

        }, 3000);
    } else {
        reject('No pudimos obtener los datos')
    }
})

const getData2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Ricardo',
                apellido: 'Herrera',
            })

        }, 3000);
    } else {
        reject('No pudimos obtener los datos de data 2')
    }
})

console.log('Inicio')

getData(false)
    .then((result) => {
        console.log(result)
        return getData2(true)
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    });

console.log('Fin')

// async   -   await

const getData3 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Ricardo',
                apellido: 'Herrera',
            })

        }, 3000);
    } else {
        reject('No pudimos obtener los datos')
    }
})

const getData4 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Ricardo',
                apellido: 'Herrera',
            })

        }, 3000);
    } else {
        reject('No pudimos obtener los datos de data 2')
    }
})

const main = async () => {
    try {
        let res = await getData3(false)
        let res2 = await getData4(true)
        console.log(res)
        console.log(res2)
    } catch (error) {
        console.log(error)
    }
}

main()