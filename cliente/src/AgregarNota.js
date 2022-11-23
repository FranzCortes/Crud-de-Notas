import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

function AgregarNota(){

    //hooks
    const[titulo, setTitulo]=useState('')
    const[fecha, setFecha]=useState('')
    const[descripcion, setDescripcion]=useState('')

    const navegar = useNavigate('')


    function agregarNota(){
        let nota = {
            titulo:titulo,
            fecha:fecha,
            descripcion:descripcion,
            idNota: uniquid()
        }
        console.log(nota)

        axios.post('/api/nota/agregarnota', nota)
        .then(res=>{
            Swal.fire(  '',
            'Creaste la nota con exito',
            'success')
            navegar('/')
        })
        .then(err => {console.log(err)})
    };


    return(
        <div className='container'>
            <div className ="row">
                    <h2 className="mt-4">Crear Nota</h2>
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

                    <button onClick={agregarNota} className="btn btn-success">Guardar Nota</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarNota;