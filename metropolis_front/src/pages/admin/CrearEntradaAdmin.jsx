import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearEntrada } from "../../components/admin/create/FormularioCrearEntrada";

export function CrearEntradaAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearEntrada/>
      <Footer />
    </>
  );
}
