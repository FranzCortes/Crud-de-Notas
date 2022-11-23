import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UsuarioIndividual from './UsuarioIndividual'

function ListaUsuarios(){

    const[dataUsuarios, setDataUsuarios] = useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setDataUsuarios(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    // Mapear lista de usuario en objeto usuario
    const listaUsuarios = dataUsuarios.map(usuario => {
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )

    })

    return(
        <div>
            <h2>Lista de usuarios</h2>
            {listaUsuarios}
        </div>
    )
}

export default ListaUsuarios;