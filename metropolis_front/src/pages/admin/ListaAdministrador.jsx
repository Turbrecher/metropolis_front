import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ListadoAPI } from "../../components/admin/ListadoAPI";

export function ListaAdministrador() {
  return (
    <>
      <Header />
      <Nav />
      <ListadoAPI/>
      <Footer />
    </>
  );
}
