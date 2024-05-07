import React from 'react'
import { Tarjeta } from './Tarjeta'

export function Menus(props) {
    return (

        <>
            <h1 class="titulo">MENUS</h1>

            <div class="tarjetas">
                <Tarjeta
                    titulo="MENU PAREJA"
                    descripcion="¡PERFECTO PARA CITAS!"
                    imagen="imagen"
                    precio="7.50"
                />

                <Tarjeta
                    titulo="MENU INFANTIL"
                    descripcion="¡PARA LOS MAS PEQUES!"
                    imagen="imagen"
                    precio="5.00"
                />

                <Tarjeta
                    titulo="MENU AHORRO"
                    descripcion="¡PARA DORMIR TRANQUILO!"
                    imagen="imagen"
                    precio="5.00"
                />
            </div>
        </>

    )
}