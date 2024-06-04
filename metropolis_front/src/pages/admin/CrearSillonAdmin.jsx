import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearSillon } from "../../components/admin/create/FormularioCrearSillon";

export function CrearSillonAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearSillon />
      <Footer />
    </>
  );
}
