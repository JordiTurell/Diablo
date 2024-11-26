const { Usuarios } = require('../models')
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'gjnfd|kghlfds@uy498372gr|fjksh';
const TOKEN_EXPIRATION = '1h';

class UsuariosService {

    async createAdmin(username, password, email) {
        try{
            const user = await Usuarios.create({
                username, password, email
            })
            console.log(user)
            return user;
        }catch(error){
            console.log(error.message)
            throw new Error('Error al crear el usuario Administrador: '+ error.message)
        }
    }

    async login(login){
        try{
            const user = await Usuarios.getUserByUserName(login.user)
            if(!user){
                throw new Error('Usuario no encontrado')
            }

            const salt = await bcrypt.genSalt(10)
            const pass = await bcrypt.hash(login.password, salt)
            if(bcrypt.compare(pass, user.password)){
                const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
                    expiresIn: TOKEN_EXPIRATION,
                });

                return {
                    token: token,
                    status: true
                }
            }else{
                return {
                    token: null,
                    status: false
                }
            }
        }catch(e){
            console.log(error.message)
            throw new Error('Error Login')
        }
    }

    // Obtener todos los usuarios
    async getAllUsers() {
        try {
            const users = await Usuarios.findAll();
            return users;
        } catch (error) {
            throw new Error('Error al obtener usuarios: ' + error.message);
        }
    }

    // Obtener un usuario por ID
    async getUserById(id) {
        try {
            const user = await Usuarios.findByPk(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            return user;
        } catch (error) {
            throw new Error('Error al obtener el usuario: ' + error.message);
        }
    }

    // Actualizar un usuario
    async updateUser(id, userData) {
        try {
            const user = await Usuarios.findByPk(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            return await user.update(userData);
        } catch (error) {
            throw new Error('Error al actualizar el usuario: ' + error.message);
        }
    }

    // Eliminar un usuario
    async deleteUser(id) {
        try {
            const user = await Usuarios.findByPk(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            await user.destroy();
            return { message: 'Usuario eliminado exitosamente' };
        } catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error.message);
        }
    }
}

module.exports = new UsuariosService();