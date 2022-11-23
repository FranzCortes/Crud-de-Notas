import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

function AgregarUsuario(){

    //hooks
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')

    const navegar = useNavigate('')


    function agregarUsuario(){
        let usuario = {
            nombre:nombre,
            email:email,
            telefono:telefono,
            idUsuario: uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res=>{
            Swal.fire(  '',
            'El usuario se créo con éxito',
            'success')
            navegar('/')
        })
        .then(err => {console.log(err)})
    };


    return(
        <div className='container'>
            <div className ="row">
                    <h2 className="mt-4">Crear un Usuario</h2>
            </div>
            <div className ="row">
                <div className ="col-sm-6 offset-3">
                    <div>
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <textarea type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></textarea>
                    </div>

                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarUsuario;