import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Entradas } from "../components/precios/Entradas";
import { Menus } from "../components/precios/Menus";
import { Comidas } from "../components/precios/Comidas";
import { Bebidas } from "../components/precios/Bebidas";

export function Precios() {
  return (
    <>
      <Header />
      <Nav />

      <main>
        <div className="precios">
          <Entradas />
          <Menus />
          <Comidas />
          <Bebidas />
        </div>
      </main>

      <Footer />
    </>
  );
}
