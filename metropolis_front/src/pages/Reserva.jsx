import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Codigo } from "../components/reserva/Codigo";
import { obtenerSesion } from "../api/reservas.api";
import { getCookie } from "../components/autenticacion/getCookie";
import { useNavigate, useParams } from 'react-router-dom'

export function Reserva() {
  const [sesion, setSesion] = useState([])
  const [sillones, setSillones] = useState([])
  const [recuadrosSillones, setRecuadrosSillones] = useState ([])
  const navigate = useNavigate()
  const {id_sesion} = useParams()

  useEffect(() => {

    //Solo pueden acceder a esta vista los usuarios autenticados
    if(!getCookie("token")){
      return navigate("/login")
    }

    async function cargarSesion() {
      const respuesta = await obtenerSesion(id_sesion);
      setSesion(respuesta.data);
      setSillones(respuesta.data.sala.sillones)

      //CREAMOS TODAS LAS ETIQUETAS DE LOS SILLONES
      setRecuadrosSillones (respuesta.data.sala.sillones.map((sillon)=>{

        let sillones_ocupados = respuesta.data.sillones_ocupados

        //CONVERTIMOS EL ARRAY DE SILLONES OCUPADOS EN UN ARRAY CON SUS IDS
        let sillones_ocupados_ids = []
        for(let i = 0;i<sillones_ocupados.length;i++){
          sillones_ocupados_ids.push(sillones_ocupados[i].id)
        }

        //COMPROBAMOS QUE SI EL SILLON DE LOS DISPONIBLES EN LA SALA ESTA OCUPADO EN LA SESION ACTUAL
        if(sillones_ocupados_ids.includes(sillon.id)){
          return <div key={sillon} className="sillon" style={{background:"#bc2016"}}></div>
        }

        return <a href={"http://localhost:3000/reserva/" + id_sesion + "/" + sillon.id}>
          <div key={sillon}  className="sillon"></div>
        </a>
      }
    
    ))
    }
    cargarSesion()
  }, []);



  return (
    <>
      <Header />
      <Nav />

      <div className="reserva">
        <div className="pantalla">Pantalla</div>

        <div className="sillones">
          {recuadrosSillones}
        </div>

        <div className="leyenda">
          <Codigo descripcion="Libre" color="#20c249aa" />
          <Codigo descripcion="Ocupado" color="#bc2016" />
        </div>
      </div>

      <Footer />
    </>
  );
}
