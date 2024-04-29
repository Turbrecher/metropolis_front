import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function Cartelera() {
  return (
    <>
      <Header />
      <Nav />

      <div className="cartelera">
        <h1 className="titulo">
          PELICULAS <span style={{color:'#ffdd0e'}}>EN</span> CARTELERA
        </h1>

        <div className="peliculas">
          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_jojo.jpg' %}"
                alt=""
              />
            </div>

            <h3>Metropolis</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_jojo.jpg' %}"
                alt=""
              />
            </div>

            <h3>JoJo Bizarre Adventures</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_kimetsu.jpg' %}"
                alt=""
              />
            </div>

            <h3>Kimetu No Yaiba</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_kungfupanda.jpg' %}"
                alt=""
              />
            </div>

            <h3>Kungu Fu Panda</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_vengadores.jpg' %}"
                alt=""
              />
            </div>

            <h3>Los Vengadores</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_jojo2.jpg' %}"
                alt=""
              />
            </div>

            <h3>Jojo Bizarre Adventures II</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_oshi_no_ko.jpg' %}"
                alt=""
              />
            </div>

            <h3>Oshi no Ko</h3>
          </div>

          <div className="pelicula">
            <div className="img">
              <img
                src="{% static 'images/carteles/cartel_thor.jpg' %}"
                alt=""
              />
            </div>

            <h3>Thor, El Mundo Oscuro</h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
