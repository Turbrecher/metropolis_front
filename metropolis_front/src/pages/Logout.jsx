import React from 'react'
import { useNavigate } from 'react-router-dom'
import {getCookie} from '../components/autenticacion/getCookie'


export function Logout() {
    const navigate = useNavigate()

    function logout(){
        if (getCookie("token") !== "") {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            
        }

        navigate("/cartelera")
    }

    

    return (
        <>
        <h1>Has sido desconectado con exito!...</h1>
        <button style={{color:"blue",padding:"0.2cm"}} onClick={logout}>Volver</button>
        </>
    )
}