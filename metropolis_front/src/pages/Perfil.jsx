import React from 'react'
import { useEffect } from 'react'
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'
import {InfoPerfil} from '../components/autenticacion/InfoPerfil'
import { useNavigate } from "react-router-dom";
import { getCookie } from "../components/autenticacion/getCookie";


export function Perfil() {

  const navigate = useNavigate()


  useEffect(() => {

    //Solo pueden acceder a esta vista los usuarios autenticados
    if(!getCookie("token")){
        return navigate("/login")
      }
    

  }, []);

  return (

  <>
    <Header />
    <Nav />
    <InfoPerfil/>
    <Footer />
    
  </>

    
  )
}