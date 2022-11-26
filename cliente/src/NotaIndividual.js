import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function NotaIndividual({nota}){

    const navegar = useNavigate()

    //Animaciones
    
    useEffect(() => {
        AOS.init()
    }, [])

    //funcion para borrar nota
    function borrarNota(idNota){
        axios.post('/api/nota/borrarnota', {idNota:idNota}).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="zoom-in">
                <ul className="list-group">
                    <li className="list-group-item">{nota.idNota}</li>
                    <li className="list-group-item">{nota.titulo}</li>
                    <li className="list-group-item">{nota.fecha}</li>
                    <li className="list-group-item">{nota.descripcion}</li>
                </ul>

                <Link to={`/editarnota/${nota.idNota}`}><li className="btn btn-success">Editar</li></Link>
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{borrarNota(nota.idNota)}}>Borrar</button>
                <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default NotaIndividual;