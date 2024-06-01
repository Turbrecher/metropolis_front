import React from 'react'
import { getCookie } from './autenticacion/getCookie';

export function Nav() {

    let enlaces =
        <nav>
            <a href="/cartelera">Cartelera</a>
            <a href="/precios">Precios</a>
            <a href="/contacto">Contacto</a>
            <a href="/login">Iniciar Sesion</a>

        </nav>;


    

    if (getCookie("token") != "") {
        enlaces =
        <nav>
            <a href="/cartelera">Cartelera</a>
            <a href="/precios">Precios</a>
            <a href="/contacto">Contacto</a>
            <a href="/profile">Perfil</a>
            <a href="/logout">Cerrar Sesion</a>

        </nav>;
    }


    return (
        enlaces
    )
}