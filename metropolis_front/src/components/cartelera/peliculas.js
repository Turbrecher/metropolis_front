import React from 'react'
import { TarjetaPelicula } from './TarjetaPelicula'

export function Peliculas(props) {
    return (

        <>
            <div className="cartelera">


                <h1 className="titulo">
                    PELICULAS
                    <span style={{ color: "#ffdd0e" }}> EN </span>
                    CARTELERA
                </h1>

                <div className="peliculas">

                    <TarjetaPelicula titulo='Metropolis' imagen='Metropolis' />
                    <TarjetaPelicula titulo='JoJo Bizarre Adventures' imagen='Jojos' />
                    <TarjetaPelicula titulo='Kimetsu No Yaiba' imagen='Kimetsu' />
                    <TarjetaPelicula titulo='Kung Fu Panda' imagen='Kungfupanda' />

                </div>
                

            </div >
        </>

    )
}