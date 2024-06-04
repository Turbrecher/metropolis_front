import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearTipoEntrada } from "../../components/admin/create/FormularioCrearTipoEntrada";

export function CrearTipoEntradaAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearTipoEntrada />

      <Footer />
    </>
  );
}
