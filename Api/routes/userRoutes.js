const express = require('express');
const router = express.Router();
const userService = require('../services/usuariosService');

// //Crear Usuario Administrador
// router.get('/admin', async(req, res) => {
//     try{
//         const users = await userService.createAdmin('********',, '********', '********',)
//         res.status(200).json(users)
//     }catch(error){
//         res.status(400).json({message: error.message})
//     }
// })

router.post('/login', async(req, res) => {
    try{
        const token = await userService.login(req.params)
        res.status(200).json(token)
    }catch(error){
        res.status(400).json({ message: error.message })
    }
})

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener un usuario por ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un usuario
router.put('/users/:id', async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un usuario
router.delete('/users/:id', async (req, res) => {
    try {
        const response = await userService.deleteUser(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
    
module.exports = router;