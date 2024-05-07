import React from 'react'
import { Tarjeta } from './Tarjeta'

export function Bebidas(props) {
    return (

        <>
            <h1 class="titulo">BEBIDAS</h1>

            <div class="tarjetas">
                <Tarjeta
                    titulo="COCACOLA PEQUEÑA"
                    descripcion="¡PEQUEÑITO PEQUEÑITO!"
                    imagen="imagen"
                    precio="3.00"
                />

                <Tarjeta
                    titulo="COCACOLA GRANDE"
                    descripcion="¡EL TAMAÑO IDEAL!"
                    imagen="imagen"
                    precio="4.50"
                />

                <Tarjeta
                    titulo="FANTA PEQUEÑA"
                    descripcion="¡PARA GLOTONES!"
                    imagen="imagen"
                    precio="6.00"
                />

                <Tarjeta
                    titulo="FANTA GRANDE"
                    descripcion="¡PARA GLOTONES!"
                    imagen="imagen"
                    precio="6.00"
                />

                <Tarjeta
                    titulo="AGUA PEQUEÑA (50cl)"
                    descripcion="¡PARA GLOTONES!"
                    imagen="imagen"
                    precio="6.00"
                />

                <Tarjeta
                    titulo="AGUA CON GAS (50cl)"
                    descripcion="¡PARA GLOTONES!"
                    imagen="imagen"
                    precio="6.00"
                />

                <Tarjeta
                    titulo="NESTEA"
                    descripcion="¡SABOR 100% NATURAL!"
                    imagen="imagen"
                    precio="6.00"
                />

                <Tarjeta
                    titulo="CAÑA"
                    descripcion="¡PARA GLOTONES!"
                    imagen="imagen"
                    precio="6.00"
                />
            </div>
        </>

    )
}