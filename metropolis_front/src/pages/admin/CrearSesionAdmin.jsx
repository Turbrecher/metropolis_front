import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearSesion } from "../../components/admin/create/FormularioCrearSesion";

export function CrearSesionAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearSesion />
      <Footer />
    </>
  );
}
