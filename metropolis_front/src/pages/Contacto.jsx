import React from "react";
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'
import { FormularioContacto } from "../components/contacto/FormularioContacto";

export function Contacto() {
  return (
    <>
      <Header />
      <Nav />
      
      <FormularioContacto />
      

      <Footer />
    </>
  );
}
