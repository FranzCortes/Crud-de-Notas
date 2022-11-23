const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', () => {console.log('conexion correcta de la base de datos')})
objetobd.on('error', () => {console.log('error a la conexion a la base de datos')})

module.exports = mongoose