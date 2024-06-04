import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearComida } from "../../components/admin/create/FormularioCrearComida";

export function CrearComidaAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearComida />
      <Footer />
    </>
  );
}
