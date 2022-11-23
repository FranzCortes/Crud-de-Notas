import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function EditarUsuario(){

    const params = useParams()

    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')

    //para volver atras al index
    const navegar = useNavigate('')


    useEffect(() => {
        axios.post('/api/usuario/obtenerDataUsuario', {idUsuario:params.idUsuario}).then(res => {
            console.log(res.data[0])
            const dataUsuario = res.data[0]
            setNombre(dataUsuario.nombre)
            setEmail(dataUsuario.email)
            setTelefono(dataUsuario.telefono)
        })
    }, [])

    //funcion que actualiza
    function editarUsuario(){
        //Nuevo objeto para actualizar el usuario
        const actualizarUsuario = {
            nombre:nombre,
            email:email,
            telefono:telefono,
            idUsuario: params.idUsuario
        }

        //hacer la peticion usando axion 
        axios.post('/api/usuario/actualizarUsuario', actualizarUsuario)
        .then(res=>{
            Swal.fire( '',
                'El usuario se edito con éxito',
            'success')
            navegar('/')
        })
        .then(err => {console.log(err)})
    }
    
    return(
        <div className='container'>
            <div className ="row">
                    <h2 className="mt-4">Editar Usuario</h2>
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
                        <textarea className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></textarea>
                    </div>

                    <button onClick={editarUsuario} className="btn btn-success">Editar Usuario</button>
                </div>
            </div>
        </div>
    )
}

export default EditarUsuario;