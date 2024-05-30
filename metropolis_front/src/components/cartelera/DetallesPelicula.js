import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerPeliculas, obtenerSesionesPeliculas } from '../../api/detallePelicula.api'
import { Sesion } from './Sesion'


export function DetallesPelicula(props) {

    const [pelicula, setPelicula] = useState([])
    const [sesionesPelicula, setSesionesPelicula] = useState([])
    const { key } = useParams()
    const {idSesion,setIdSesion} = useState()


    useEffect(() => {
        

        async function cargarPelicula() {
            const respuesta = await obtenerPeliculas(key)
            setPelicula(respuesta.data)
        }

        async function cargarSesionesPelicula() {
            const respuesta = await obtenerSesionesPeliculas(key)
            setSesionesPelicula(respuesta.data)
        }

        cargarPelicula()
        cargarSesionesPelicula()
    }, [])


    

    return (

        <>

            <div className="detallesPelicula">

                <div className='trailer'>
                    <iframe src={pelicula.url_trailer} title="Trailer" frameBorder="0"  allowFullScreen></iframe>
                </div>

                <div className='informacionPelicula'>

                    <div className='portada'>
                        <img src={pelicula.cartel}></img>
                    </div>

                    <div className='informacion_principal'>
                        <h2>{pelicula.titulo}</h2>

                        <h4>Director/es</h4>
                        <p>{pelicula.director}</p>

                        <h4>Actores</h4>
                        <p>{pelicula.actores}</p>

                        <h4>Sinopsis</h4>
                        <p>{pelicula.sinopsis}</p>


                    </div>

                    <div className='informacion_adicional'>

                        <h4>Duracion</h4>
                        <p>{pelicula.duracion}</p>

                        <h4>Fecha de estreno</h4>
                        <p>{pelicula.fecha_lanzamiento}</p>

                        <h4>Generos</h4>
                        <p>{pelicula.genero}</p>

                        <h4>Clasificacion</h4>
                        <p>{pelicula.pegi}</p>


                    </div>


                </div>

                <div className='sesionesPelicula'>


                    {sesionesPelicula.map((sesion) => (
                        <Sesion
                            id_sesion = {sesion.id}
                            key = {sesion.id}
                            hora={sesion.hora}
                            sala={sesion.sala.nombre}
                        />
                    ))}

                </div>

            </div >


        </>

    )
}