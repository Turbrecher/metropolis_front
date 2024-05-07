import React from 'react'
import { Tarjeta } from './Tarjeta'

export function Comidas(props) {
    return (

        <>
            <h1 class="titulo">COMIDAS</h1>

            <div class="tarjetas">
                <Tarjeta
                    titulo="PALOMITAS S"
                    descripcion="¡PEQUEÑITO PEQUEÑITO!"
                    imagen="imagen"
                    precio="3.00"
                />

                <Tarjeta
                    titulo="PALOMITAS M"
                    descripcion="¡EL TAMAÑO IDEAL!"
                    imagen="imagen"
                    precio="4.50"
                />

                <Tarjeta
                    titulo="PALOMITAS XL"
                    descripcion="¡PARA GLOTONES!"
                    imagen="imagen"
                    precio="6.00"
                />
            </div>
        </>

    )
}