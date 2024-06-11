import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function Error404() {

  return (
    <>
      <Header />
      <Nav />
      <main>
        <h1 style={{textAlign:"center", color:"#ffdd0e", position:"relative", top:"30%"}} className="titulo">La página que buscabas no existe...</h1>
      </main>
      <Footer />
    </>
  );
}
