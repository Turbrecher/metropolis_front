import React from 'react'
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'
import { FormularioLogin } from "../components/autenticacion/FormularioLogin";


export function Login() {
  return (

  <>
    <Header />
    <Nav />
    <FormularioLogin/>
    <Footer />
    
  </>

    
  )
}