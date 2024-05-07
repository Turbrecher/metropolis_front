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
      <DetallesPelicula
        titulo="Garfield, la pelicula"
        director="Tu madre"
        actores="Victor, Ruben, Topacio, Iniesta, El coche del whatsapp"
        sinopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis blandit neque, at mattis elit. Fusce feugiat, sem et semper porta, dolor augue condimentum urna, et pulvinar ante massa et nulla. Nullam rutrum ultrices mi vitae vulputate. Aliquam quis tellus quis sem gravida lacinia id a eros. Integer rhoncus massa at laoreet finibus. Vestibulum elementum mi id arcu vehicula, vel molestie libero dapibus. Fusce dictum scelerisque suscipit. Pellentesque eget erat tincidunt, rhoncus massa at, mattis diam. "
        duracion="120 minutos"
        fecha_estreno="25-04-2015"
        pegi="12+"
      />
      <Footer />
    </>
  );
}
