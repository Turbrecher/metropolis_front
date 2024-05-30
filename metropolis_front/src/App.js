import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cartelera } from "./pages/Cartelera.jsx";
import { InfoPelicula } from "./pages/InfoPelicula.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Precios } from "./pages/Precios.jsx";
import { Reserva } from "./pages/Reserva.jsx";
import { Pago } from "./pages/Pago.jsx";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad.jsx";
import { PoliticaCookies } from "./pages/PoliticaCookies.jsx";
import { Logout } from "./pages/Logout.jsx";
import { Perfil } from "./pages/Perfil.jsx";
import {  } from "./pages/Pago.jsx";

function App() {
  return (
    //Configuracion de las rutas de navegacion.
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cartelera />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/pelicula" element={<InfoPelicula />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/reserva/:id_sesion" element={<Reserva />} />
          <Route path="/reserva/:id_sesion/:id_sillon" element={<Pago />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
          <Route path="/pelicula/:key" element={<InfoPelicula />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
