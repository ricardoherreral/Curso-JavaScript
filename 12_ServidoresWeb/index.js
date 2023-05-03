const express = require('express');

const Service = require('./src/service');

const app = express()
const PORT = 3000

// El servidor recibira JSON
app.use(express.json())

//Listar todos los usuarios
app.get('/', (req, res) => {
    res.json({
        message: 'Lista de usuarios',
        body: Service.getUsers(),
    })
})

//Buscar usuario recibiendo ID
app.get('/:id', (req, res) => {
    // let id = req.params.id;
    // console.log(id)
    // console.log(req.params)

    let { params: { id } } = req
    let user = Service.getUser(id)

    res.json({
        message: `Usuario ${id}`,
        body: user,
    })
})

//Crear usuario
app.post('/', (req, res) => {
    let { body: newUser } = req
    let user = Service.createUser(newUser);
    res.status(201).json({
        message: 'Usuario fue creado',
        body: user,
    })
})

// Actualizar usuario
app.put('/:id', (req, res) => {
    let userId = req.params.id
    let user = Service.getUser(userId)
    let updatedUser = Service.updateUser(user.id, req.body)
    console.log(updatedUser)
    if (updatedUser) {
        res.status(202).json({
            message: 'Usuario actualizado',
            body: updatedUser
        })
    } else {
        res.status(304).json({
            message: 'Usuario no encontrado'
        })
    }
    // Service.updateUser(updatedUser)
    // res.status().json({
    //     message: 'Usuario actualizado',
    //     body: updatedUser,
    // })
})

//Eliminar usuario
app.delete('/:id', (req, res) => {
    let userId = req.params.id
    console.log(userId)
    let deletedUser = Service.deleteUser(userId)
    if (deletedUser) {
        res.status(200).json({
            message: 'Usuario Eliminado'
        })
    } else {
        res.status(304).json({
            message: 'Usuario no encontrado'
        })
    }
})

// Servidor escuchando - activo
app.listen(PORT, () => {
    console.log(`Servidor Escuchando en http://localhost:${PORT}`)
})
