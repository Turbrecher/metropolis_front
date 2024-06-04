import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearUsuarioAdministrador } from "../../components/admin/create/FormularioCrearUsuarioAdministrador";

export function CrearUsuarioAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearUsuarioAdministrador />
      <Footer />
    </>
  );
}
