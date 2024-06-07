import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearSesion } from "../../components/admin/create/FormularioCrearSesion";
import { getCookie } from "../../components/autenticacion/getCookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export function CrearSesionAdmin() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    if (!getCookie("token")) {
      navigate("/");
    }

    getUsuario();
  }, []);

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
        console.log(error);
      });
  }

  if (usuario.is_superuser != true) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <Nav />
      <main>
        <FormularioCrearSesion />
      </main>
      <Footer />
    </>
  );
}
