import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearSala } from "../../components/admin/create/FormularioCrearSala";

export function CrearSalaAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearSala />
      <Footer />
    </>
  );
}
