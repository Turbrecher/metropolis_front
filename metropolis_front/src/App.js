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

import { ListaAdministrador } from "./pages/admin/ListaAdministrador.jsx";
import { CrearComidaAdmin } from "./pages/admin/CrearComidaAdmin.jsx"
import { CrearBebidaAdmin } from "./pages/admin/CrearBebidaAdmin.jsx"
import { CrearMenuAdmin } from "./pages/admin/CrearMenuAdmin.jsx"
import { CrearEntradaAdmin } from "./pages/admin/CrearEntradaAdmin.jsx"
import { CrearSalaAdmin } from "./pages/admin/CrearSalaAdmin.jsx"
import { CrearSesionAdmin } from "./pages/admin/CrearSesionAdmin.jsx"
import { CrearPeliculaAdmin } from "./pages/admin/CrearPeliculaAdmin.jsx"
import { CrearSillonAdmin } from "./pages/admin/CrearSillonAdmin.jsx"
import { CrearTipoEntradaAdmin } from "./pages/admin/CrearTipoEntradaAdmin.jsx"
import { CrearUsuarioAdmin } from "./pages/admin/CrearUsuarioAdmin.jsx"

import { EditarComidaAdmin } from "./pages/admin/EditarComidaAdmin.jsx"
import { EditarBebidaAdmin } from "./pages/admin/EditarBebidaAdmin.jsx"
import { EditarMenuAdmin } from "./pages/admin/EditarMenuAdmin.jsx"
import { EditarEntradaAdmin } from "./pages/admin/EditarEntradaAdmin.jsx"
import { EditarSalaAdmin } from "./pages/admin/EditarSalaAdmin.jsx"
import { EditarSesionAdmin } from "./pages/admin/EditarSesionAdmin.jsx"
import { EditarPeliculaAdmin } from "./pages/admin/EditarPeliculaAdmin.jsx"
import { EditarSillonAdmin } from "./pages/admin/EditarSillonAdmin.jsx"
import { EditarTipoEntradaAdmin } from "./pages/admin/EditarTipoEntradaAdmin.jsx"
import { EditarUsuarioAdmin } from "./pages/admin/EditarUsuarioAdmin.jsx"

import {Error404} from "./pages/Error404.jsx"

function App() {
  return (
    //Configuracion de las rutas de navegacion.
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


        <Route path="/admin/lista" element={<ListaAdministrador />} />
        <Route path="/admin/create/bebida" element={<CrearBebidaAdmin />} />
        <Route path="/admin/create/comida" element={<CrearComidaAdmin />} />
        <Route path="/admin/create/menu" element={<CrearMenuAdmin />} />
        <Route path="/admin/create/entrada" element={<CrearEntradaAdmin />} />
        <Route path="/admin/create/sala" element={<CrearSalaAdmin />} />
        <Route path="/admin/create/sesion" element={<CrearSesionAdmin />} />
        <Route path="/admin/create/sillon" element={<CrearSillonAdmin />} />
        <Route path="/admin/create/pelicula" element={<CrearPeliculaAdmin />} />
        <Route path="/admin/create/tipoentrada" element={<CrearTipoEntradaAdmin />} />
        <Route path="/admin/create/usuario" element={<CrearUsuarioAdmin />} />

        <Route path="/admin/edit/bebida/:key" element={<EditarBebidaAdmin />} />
        <Route path="/admin/edit/comida/:key" element={<EditarComidaAdmin />} />
        <Route path="/admin/edit/menu/:key" element={<EditarMenuAdmin />} />
        <Route path="/admin/edit/entrada/:key" element={<EditarEntradaAdmin />} />
        <Route path="/admin/edit/sala/:key" element={<EditarSalaAdmin />} />
        <Route path="/admin/edit/sesion/:key" element={<EditarSesionAdmin />} />
        <Route path="/admin/edit/sillon/:key" element={<EditarSillonAdmin />} />
        <Route path="/admin/edit/pelicula/:key" element={<EditarPeliculaAdmin />} />
        <Route path="/admin/edit/tipoentrada/:key" element={<EditarTipoEntradaAdmin />} />
        <Route path="/admin/edit/usuario/:key" element={<EditarUsuarioAdmin />} />
        
        
        <Route path="*" element={<Error404/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
