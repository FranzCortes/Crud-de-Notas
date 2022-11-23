const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema

const eschemaNota = new eschema({
    titulo: String,
    fecha: String,
    descripcion: String,
    idNota: String,
})

const ModeloNota = mongoose.model('notas', eschemaNota)
module.exports = router

// ruta de prueba
// router.get('/test',(req, res)=>{
//     res.end('Saludo Carga desde ruta test')
// })

//agregar usuarios
router.post('/agregarnota',(req, res)=>{
    const nuevaNota = new ModeloNota({
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        idNota: req.body.idNota,
    })
    nuevaNota.save(function(err){
        if(!err){
            res.send('Nota agregada correctamente');
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerNota',(req, res) => {
    ModeloNota.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener data usuario
router.post('/obtenerDataNota',(req, res) => {
    ModeloNota.find({idNota:req.body.idNota}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Actualizar usuario
router.post('/actualizarnota', (req, res)=>{

    ModeloNota.findOneAndUpdate({idNota:req.body.idNota},{
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion
    }, (err) =>{
        if(!err){
            res.send('Nota actualizada correctamente')
        }else{
            res.send(err)
        }
    })
})


//Eliminar usuario
router.post('/borrarnota', (req, res)=>{

    ModeloNota.findOneAndDelete({idNota:req.body.idNota},(err) => {
        if(!err){
            res.send('Nota eliminada correctamente')
        }else{
            res.send(err)
        }
    })
})

