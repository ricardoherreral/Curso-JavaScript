for (let i = 2; i <= 12; i++) {
    console.log('Tabla del ' + i)
    for (let j = 1; j <= 10; j++) {
        console.log(i + 'x' + j + '=' + (i * j))
    }
    console.log('\n')
}

let i = 2
let j = 1

while (i <= 12) {
    console.log('Tabla del ' + i)
    while (j <= 10) {
        console.log(i + 'x' + j + '=' + (i * j))
        j++
    }
    i++
    j = 1
    console.log('\n')
}

let i2 = 2
let j2 = 1

do {
    console.log('Tabla del ' + i2)
    do {
        console.log(i2 + 'x' + j2 + '=' + (i2 * j2))
        j2++
    } while (j2 <= 10)
    i2++
    j2 = 1
    console.log('\n')
} while (i2 <= 12)