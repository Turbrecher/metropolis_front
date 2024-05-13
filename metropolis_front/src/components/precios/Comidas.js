import React, { useState } from 'react'
import { Tarjeta } from './Tarjeta'
import { useEffect } from 'react';
import { obtenerComidas } from '../../api/comidas.api';

export function Comidas(props) {

    const [tarjetasComida, setTarjetasComida] = useState([])

    //Asignamos el valor del get a la variable TarjetasComida
    useEffect(() => {

        async function cargarComidas() {
            const respuesta = await obtenerComidas()
            setTarjetasComida(respuesta.data)
        }

        cargarComidas()
    },[]);

    return (

        <>
            <h1 className="titulo">COMIDAS</h1>

            <div className="tarjetas">

                {tarjetasComida.map(e => (
                    <Tarjeta
                        key={e.id}
                        titulo={e.nombre}
                        descripcion={e.descripcion}
                        imagen={e.foto}
                        precio={e.precio}
                    />
                ))}

            </div>
        </>

    )
}