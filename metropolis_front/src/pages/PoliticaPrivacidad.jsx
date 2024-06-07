import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Privacidad } from "../components/privacidad/Privacidad";

export function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <Nav />

      <main>
        <Privacidad />
      </main>

      <Footer />
    </>
  );
}
