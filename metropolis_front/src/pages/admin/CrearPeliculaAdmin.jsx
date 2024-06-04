import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { FormularioCrearPelicula } from "../../components/admin/create/FormularioCrearPelicula";

export function CrearPeliculaAdmin() {
  return (
    <>
      <Header />
      <Nav />
      <FormularioCrearPelicula />
      <Footer />
    </>
  );
}
