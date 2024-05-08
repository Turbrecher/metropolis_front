import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Codigo } from "../components/reserva/Codigo";

export function Reserva() {

  //Numero de filas y de columnas
  let filas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let columnas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let primeraFila = filas.map(()=>{
    return <div className="sillon" style={{background:"#ffdd0e"}}></div>;
  })

  //Creamos un array con 10 sillones que representa una fila
  let gridFila = filas.map(() => {
    return <div className="sillon"></div>;
  });

  //Por cada columna, pintamos una fila en el grid completo, otro array.
  let gridCompleto = columnas.map(() => {
    return gridFila;
  });

  return (
    <>
      <Header />
      <Nav />

      <div className="reserva">

        <div className="pantalla">
          Pantalla
        </div>

        <div className="sillones">
          {primeraFila}
          {gridCompleto}
        </div>

        <div className="leyenda">
          <Codigo descripcion="Libre" color="#20c249aa" />
          <Codigo descripcion="Adaptado" color="#ffdd0e" />
          <Codigo descripcion="Ocupado" color="#bc2016" />
        </div>

      </div>

      <Footer />
    </>
  );
}
