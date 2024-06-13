import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FormularioPago } from "../components/reserva/FormularioReserva";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../components/autenticacion/getCookie";
import axios from "axios";

export function Pago() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState();

  let params = {};

  let config = {
    headers: {
      Authorization: "Token " + getCookie("token"),
    },
  };

  async function getUsuario() {
    //Hacemos la peticion POST a la API
    await axios
      .post(
        "http://localhost:8000/autenticacion/api/usuarios/profile",
        params,
        config
      )
      .then((response) => {
        setUsuario(response.data);
      })
      .catch(function (error) {
        alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
      });
  }

  useEffect(() => {
    getUsuario();
  }, []);

  //Solo pueden acceder a esta vista los usuarios autenticados
  if (!getCookie("token") || !usuario) {
    navigate("/login");
  }

  return (
    <>
      <Header />
      <Nav />
      <main>
        <FormularioPago />
      </main>

      <Footer />
    </>
  );
}
