const express = require('express');
const router = express.Router();
const multer = require('multer');

const mongoose = require('mongoose');
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    imagen: String,
    idUsuario: String,
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

// ruta de prueba
// router.get('/test',(req, res)=>{
//     res.end('Saludo Carga desde ruta test')
// })

//agregar usuarios
router.post('/agregarusuario',(req, res)=>{
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario,
    })
    nuevoUsuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente');
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerusuarios',(req, res) => {
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener data usuario
router.post('/obtenerDataUsuario',(req, res) => {
    ModeloUsuario.find({idUsuario:req.body.idUsuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Actualizar usuario
router.post('/actualizarUsuario', (req, res)=>{

    ModeloUsuario.findOneAndUpdate({idUsuario:req.body.idUsuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) =>{
        if(!err){
            res.send('usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Eliminar usuario
router.post('/borrarUsuario', (req, res)=>{

    ModeloUsuario.findOneAndDelete({idUsuario:req.body.idUsuario},(err) => {
        if(!err){
            res.send('usuario eliminado correctamente')
        }else{
            res.send(err)
        }
    })
})

