import React from 'react'
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'

export function Login() {
  return (

  <>
    <Header />
    <Nav />
    <div className="login">

      <div className="formulario_login">
        <h1 className="titulo">INICIAR SESION</h1>

        <form action="">

          <label htmlFor="email">Correo Electronico</label>
          <input type="text" name='email' id='email' autoComplete='off' />

          <label htmlFor="password">Contraseña</label>
          <input type="password" name='password' id='password' autoComplete='off' />

          <input className='submit' type="submit" value={'Inicia Sesion'} />

        </form>

        <h4>¿No tienes una cuenta?</h4>
        <h4><a href="/register">Crear una cuenta</a></h4>

      </div>

    </div>
    <Footer />
    
  </>

    
  )
}