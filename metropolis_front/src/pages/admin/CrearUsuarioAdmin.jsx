import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearUsuarioAdministrador } from "../../components/admin/create/FormularioCrearUsuarioAdministrador";
import { getCookie } from "../../components/autenticacion/getCookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export function CrearUsuarioAdmin() {
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
        navigate("/")//Si hay error de token, vuelve a la cartelera
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
        <FormularioCrearUsuarioAdministrador />
      </main>
      <Footer />
    </>
  );
}
