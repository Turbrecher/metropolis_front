import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerPeliculas } from '../../api/detallePelicula.api'

export function DetallesPelicula() {

    const [pelicula, setPelicula] = useState([])
    const { id } = useParams()


    useEffect((id) => {

        async function cargarPelicula() {
            const respuesta = await obtenerPeliculas(6)
            setPelicula(respuesta.data)
            console.log(respuesta.data)
        }

        cargarPelicula()
    }, [])


    return (

        <>


            <div className="detallesPelicula">

                <div className='trailer'>
                    <iframe src={pelicula.url_trailer} title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className='informacionPelicula'>

                    <div className='portada'>
                        <img src= {pelicula.cartel }></img>
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
                        //Poner generos

                        <h4>Clasificacion</h4>
                        <p>{pelicula.pegi}</p>


                    </div>


                </div>

                <div className='sesionesPelicula'>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                </div>

            </div >


        </>

    )
}