import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Peliculas } from "../components/cartelera/Peliculas";

export function Cartelera() {
  return (
    <>
      <Header />
      <Nav />

      <Peliculas />

      <Footer />
    </>
  );
}
