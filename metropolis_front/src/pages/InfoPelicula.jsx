import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { DetallesPelicula } from "../components/cartelera/DetallesPelicula";

export function InfoPelicula() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <DetallesPelicula />
      </main>
      <Footer />
    </>
  );
}
