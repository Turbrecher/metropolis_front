import React from 'react'
import { useNavigate } from 'react-router-dom'
import {getCookie} from '../components/autenticacion/getCookie'
import { useEffect } from 'react'


export function Logout() {
    const navigate = useNavigate()

    function logout(){
        if (getCookie("token") !== "") {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            
        }

        navigate("/cartelera")
    }


    useEffect(()=>{
        logout()
    },[])

    

    

    return (
        <>
        </>
    )
}