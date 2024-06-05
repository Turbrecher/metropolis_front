import React, { useEffect, useState } from 'react'
import { getCookie } from './autenticacion/getCookie';
import axios from 'axios';

export function Nav() {

    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        getUsuario()
    }, [])

    let params = {}

    let config = {
        headers: {
            "Authorization": "Token " + getCookie("token")
        }
    };


    async function getUsuario() {
        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/profile", params, config
        ).then((response) => {
            setUsuario(response.data)


        }).catch(function (error) {
            console.log(error);
        });
    }

    let enlaces =
        <nav>
            <a href="/cartelera">Cartelera</a>
            <a href="/precios">Precios</a>
            <a href="/contacto">Contacto</a>
            <a href="/login">Iniciar Sesion</a>


        </nav>;




    if (getCookie("token") != "" && usuario.id) {
        enlaces =
            <nav>
                <a href="/cartelera">Cartelera</a>
                <a href="/precios">Precios</a>
                <a href="/contacto">Contacto</a>
                <a href="/profile">Perfil</a>
                <a href="/logout">Cerrar Sesion</a>

            </nav>;
    }

    if (getCookie("token") != "" && usuario.is_superuser == true) {
        enlaces =
            <nav>
                <a href="/cartelera">Cartelera</a>
                <a href="/precios">Precios</a>
                <a href="/contacto">Contacto</a>
                <a href="/profile">Perfil</a>
                <a href="/logout">Cerrar Sesion</a>
                <a href="/admin/lista">Administrar</a>

            </nav>;
    }




    return (
        enlaces
    )
}