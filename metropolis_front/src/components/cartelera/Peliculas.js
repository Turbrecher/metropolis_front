import React from 'react'
import { TarjetaPelicula } from './TarjetaPelicula'
import { obtenerPeliculas } from '../../api/peliculas.api';
import { useState, useEffect } from 'react'

export function Peliculas(props) {
    const [tarjetasPelicula, setTarjetasPelicula] = useState([])

    //Asignamos el valor del get a la variable TarjetasComida
    useEffect(() => {

        async function cargarPeliculas() {
            const respuesta = await obtenerPeliculas()
            setTarjetasPelicula(respuesta.data)
            console.log(respuesta.data)
        }

        cargarPeliculas()
    }, []);


    return (

        <>
            <div className="cartelera">


                <h1 className="titulo">
                    PELICULAS
                    <span style={{ color: "#ffdd0e" }}> EN </span>
                    CARTELERA
                </h1>

                <div className="peliculas">

                    {tarjetasPelicula.map((e) => (
                        <TarjetaPelicula titulo={e.titulo} imagen={e.cartel} id_pelicula={e.id} key={e.id} />
                    ))}

                </div>


            </div >
        </>

    )
}