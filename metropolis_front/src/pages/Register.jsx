import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function Register() {
  return (
    <>
      <Header />
      <Nav />
      <div className="register">
        <div className="formulario_register">
          <h1 className="titulo">REGISTRARSE</h1>

          <form action="">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" autoComplete="off" />

            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" autoComplete="off" />

            <label htmlFor="date">Fecha de Nacimiento</label>
            <input type="date" name="date" id="date" autoComplete="off" />

            <label htmlFor="email">Correo Electronico</label>
            <input type="text" name="email" id="email" autoComplete="off" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" autoComplete="off"
            />

            <input className="submit" type="submit" value={"Inicia Sesion"} />
          </form>

          <h4>¿Ya tienes una cuenta?</h4>
          <h4><a href="/login">Inicia Sesion</a></h4>
        </div>
      </div>
      <Footer />
    </>
  );
}
