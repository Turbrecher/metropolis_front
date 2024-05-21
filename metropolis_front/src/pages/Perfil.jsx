import React from 'react'
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'
import {InfoPerfil} from '../components/autenticacion/InfoPerfil'


export function Perfil() {
  return (

  <>
    <Header />
    <Nav />
    <InfoPerfil/>
    <Footer />
    
  </>

    
  )
}