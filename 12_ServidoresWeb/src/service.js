// Va a manipular-controlar todos nuestros datos (CRUD)

const data = require('./MOCK_DATA.json');

//Adentro de module.exports se escriben las funciones para los servicios
module.exports = {
    getUsers: () => data,
    createUser: (dataUser) => {
        let newUser = {
            id: data.length + 1,
            ...dataUser
        }
        data.push(newUser)
        return newUser
    },
    getUser: (id) => {
        let identificador = Number(id)
        let user = data.filter((person) => person.id === identificador)[0]
        return user
    },
    updateUser: (id, updatedUser) => {
        let user = data.filter((person) => person.id === id)[0]
        user.first_name = updatedUser.first_name
        user.last_name = updatedUser.last_name
        user.email = updatedUser.email
        return user
    },
    deleteUser: (id) => {
        let identificador = Number(id)
        var position = data.findIndex((persona) => persona.id === identificador)
        console.log(position)
        if (position) {
            data.splice(position, position - 1)
            console.log(data)
            return true
        } else {
            return false
        }
    }
}