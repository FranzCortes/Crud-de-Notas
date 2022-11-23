import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function EditarNota(){

    const params = useParams()

    const[titulo, setTitulo]=useState('')
    const[fecha, setFecha]=useState('')
    const[descripcion, setDescripcion]=useState('')

    //para volver atras al index
    const navegar = useNavigate('')


    useEffect(() => {
        axios.post('/api/nota/obtenerDataNota', {idNota:params.idNota}).then(res => {
            console.log(res.data[0])
            const dataNota = res.data[0]
            setTitulo(dataNota.titulo)
            setFecha(dataNota.fecha)
            setDescripcion(dataNota.descripcion)
        })
    }, [])

    //funcion que actualiza
    function editarNota(){
        //Nuevo objeto para actualizar el usuario
        const actualizarNota = {
            titulo:titulo,
            fecha:fecha,
            descripcion:descripcion,
            idNota: params.idNota
        }

        //hacer la peticion usando axion 
        axios.post('/api/nota/actualizarnota', actualizarNota)
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
                    <h2 className="mt-4">Editar Nota</h2>
            </div>
            <div className ="row">
                <div className ="col-sm-6 offset-3">
                    <div>
                        <label htmlFor="titulo" className="form-label">Titulo</label>
                        <input type="text" className="form-control" value={titulo} onChange={(e) => {setTitulo(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="fecha" className="form-label">Fecha</label>
                        <input type="date" className="form-control" value={fecha} onChange={(e) => {setFecha(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <textarea type="text" className="form-control" value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}></textarea>
                    </div>

                    <button onClick={editarNota} className="btn btn-success">Editar Nota</button>
                </div>
            </div>
        </div>
    )
}

export default EditarNota;