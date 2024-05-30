import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FormularioPago } from "../components/reserva/FormularioReserva";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../components/autenticacion/getCookie";



export function Pago() {
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
      <FormularioPago />

      <Footer />
    </>
  );
}
