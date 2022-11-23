const express = require('express');
const app = express();

//importar conexion mongodb
const archivoDB = require ('./conexion.js')

//importacion del archivo de rutas y modelos
const rutaNota = require('./rutas/nota')

//Importat body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))


app.use('/api/nota', rutaNota)

app.get('/', (req,res) => {
    res.end('Hola mundo sean todos Bienvenidos')
})



// configurar server
app.listen(5000, function () {
    console.log("El servidor esta corriendo correctamente ")
})