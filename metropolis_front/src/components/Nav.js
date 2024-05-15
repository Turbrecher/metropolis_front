import React from 'react'

export function Nav() {

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let enlaces =
        <nav>
            <a href="/cartelera">Cartelera</a>
            <a href="/precios">Precios</a>
            <a href="/login">Iniciar Sesion</a>
            <a href="/contacto">Contacto</a>

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