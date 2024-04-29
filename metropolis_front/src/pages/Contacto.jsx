import React from "react";
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'

export function Contacto() {
  return (
    <>
      <Header />
      <Nav />
      
      
      <div className="contacto">

        <div className="formulario_contacto">

            <h1 className="titulo">CONTACTO</h1>

            <form action="">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" autocomplete="off"/>

              <label for="apellidos">Apellidos</label>
              <input type="text" name="apellidos" id="apellidos" autocomplete="off"></input>

              <label for="email">Correo Electronico</label>
              <input type="text" name="email" id="email" autocomplete="off"></input>

              <label for="mensaje">Mensaje</label>
              <textarea rows="6" name="mensaje" id="mensaje"></textarea>

              <input className="submit" type="submit" value="Enviar"></input>

            </form>

            <div className="mapa">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.3941503507313!2d-6.944969987848608!3d37.26207954141019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d0202ac6975f%3A0x202c4d07f4aa438c!2sIES%20San%20Sebastián!5e0!3m2!1ses!2ses!4v1712834894790!5m2!1ses!2ses"
              width={'100%'} height={'400px'} frameborder="0"></iframe>
            </div>

        </div>

      </div>

      <Footer />
    </>
  );
}
