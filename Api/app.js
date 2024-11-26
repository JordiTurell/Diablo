const express = require('express')
const app = express()
const { sequelize } = require('./models')
const routes = require('./routes');

app.use(express.json())

app.use('/api', routes);

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('API REST con Node.js y Sequelize');
});

(async () => {
    try{
        await sequelize.sync()
    }catch(error){
        console.error('Error al syncronizar la base de datos: '+ error)
    }
})()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});