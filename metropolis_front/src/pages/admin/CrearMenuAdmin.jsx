import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearMenu } from "../../components/admin/create/FormularioCrearMenu";

export function CrearMenuAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearMenu />
      <Footer />
    </>
  );
}
