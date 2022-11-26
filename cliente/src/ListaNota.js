import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NotaIndividual from './NotaIndividual'

function ListaNotas(){

    const[dataNota, setDataNota] = useState([])

    useEffect(() => {
        axios.get('api/nota/obtenernota').then(res => {
            console.log(res.data)
            setDataNota(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    // Mapear lista de notas en objeto nota
    const listaNota = dataNota.map(nota => {
        return(
            <div>
                <NotaIndividual nota={nota}/>
            </div>
        )

    })

    return(
        <div>
            <h2>Lista de Notas</h2>
            {listaNota}
        </div>
    )
}

export default ListaNotas;