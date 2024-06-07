import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FormularioRegistro } from "../components/autenticacion/FormularioRegistro";

export function Register() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <FormularioRegistro />
      </main>
      <Footer />
    </>
  );
}
