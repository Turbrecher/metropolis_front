import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function Precios() {
  return (
    <>
      <Header />
      <Nav />

      <div className="precios">
        <h1 className="titulo">ENTRADAS</h1>

        <div className="tarjetas">

          <div className="tarjeta">
            <h1>DIARIO</h1>
            <h3 class="dias">¡LUNES, MARTES Y JUEVES!</h3>
            <div class="img">
              <img src="{% static 'images/precios/diario.jpg' %}" alt="" />
            </div>
            <h1 class="precio">6.50€</h1>
          </div>

          <div className="tarjeta">
            <h1>DIA DEL ESPECTADOR</h1>
            <h3 class="dias">¡TODOS LOS MIERCOLES!</h3>
            <div class="img">
              <img
                src="{% static 'images/precios/dia_espectador.avif' %}"
                alt=""
              />
            </div>
            <h1 class="precio">4.50€</h1>
          </div>

          <div className="tarjeta">
            <h1>FESTIVOS</h1>
            <h3 class="dias">¡FINES DE SEMANA Y FESTIVOS!</h3>
            <div class="img">
              <img src="{% static 'images/precios/festivo.webp' %}" alt="" />
            </div>
            <h1 class="precio">7.50€</h1>
          </div>
        </div>

        <h1 class="titulo">COMIDAS Y REFRESCOS</h1>

        <div class="tarjetas">

        <div class="tarjeta">
            <h1>MENU PAREJA</h1>
            <h3 class="dias">¡LUNES, MARTES Y JUEVES!</h3>
            <div class="img">
                <img src="{% static 'images/precios/menu_pareja.png' %}" alt=""/>
            </div>
            <h1 class="precio">6.50€</h1>
        </div>
    
        <div class="tarjeta">
            <h1>MENU INFANTIL</h1>
            <h3 class="dias">¡TODOS LOS MIERCOLES!</h3>
            <div class="img">
                <img src="{% static 'images/precios/menu_pareja.png' %}" alt=""/>
            </div>
            <h1 class="precio">4.50€</h1>
        </div>
    
        <div class="tarjeta">
            <h1>MENU AHORRO</h1>
            <h3 class="dias">¡FINES DE SEMANA Y FESTIVOS!</h3>
            <div class="img">
                <img src="{% static 'images/precios/menu_pareja.png' %}" alt=""/>
            </div>
            <h1 class="precio">7.50€</h1>
        </div>

    </div>


      </div>

      <Footer />
    </>
  );
}
