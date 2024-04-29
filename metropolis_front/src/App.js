import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Cartelera} from './pages/Cartelera.jsx'
import {InfoPelicula} from './pages/InfoPelicula.jsx'
import {Contacto} from './pages/Contacto.jsx'
import {Login} from './pages/Login.jsx'
import {Register} from './pages/Register.jsx'
import {Precios} from './pages/Precios.jsx'
import {Reserva} from './pages/Reserva.jsx'
import {Privacidad} from './pages/Privacidad.jsx'
import {QuienesSomos} from './pages/QuienesSomos.jsx'
import {Cookies} from './pages/Cookies.jsx'

function App() {
  return (
    //Configuracion de las rutas de navegacion.
    <>

    <BrowserRouter>
      <Routes>

        <Route path="/cartelera" element={<Cartelera/>}/>
        <Route path="/pelicula" element={<InfoPelicula/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/precios" element={<Precios/>}/>
        <Route path="/reserva" element={<Reserva/>}/>
        <Route path="/privacidad" element={<Privacidad/>}/>
        <Route path="/quienessomos" element={<QuienesSomos/>}/>
        <Route path="/cookies" element={<Cookies/>}/>

      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
