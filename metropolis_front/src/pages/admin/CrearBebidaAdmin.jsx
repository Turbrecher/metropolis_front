import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearBebida } from "../../components/admin/create/FormularioCrearBebida";

export function CrearBebidaAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearBebida />

      <Footer />
    </>
  );
}
