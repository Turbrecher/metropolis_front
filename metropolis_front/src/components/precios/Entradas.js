import React from 'react'
import { Tarjeta } from './Tarjeta'

export function Entradas() {
    return (

        <>
            <h1 className="titulo">ENTRADAS</h1>
            <div className="tarjetas">

                <Tarjeta
                    titulo="DIARIO"
                    descripcion="¡LUNES, MARTES Y JUEVES!"
                    imagen="imagen"
                    precio="6.50"
                />

                <Tarjeta
                    titulo="DIA DEL ESPECTADOR"
                    descripcion="¡TODOS LOS MIERCOLES!"
                    imagen="imagen"
                    precio="4.50"
                />

                <Tarjeta
                    titulo="FESTIVOS"
                    descripcion="¡FINES DE SEMANA Y FESTIVOS!"
                    imagen="imagen"
                    precio="7.50"
                />
            </div>
        </>

    )
}