import React, { useState } from 'react'
import { Tarjeta } from './Tarjeta'
import { useEffect } from 'react'
import { obtenerBebidas } from '../../api/bebidas.api'


export function Bebidas(props) {

    const [tarjetasBebida, setTarjetasBebida] = useState([])

    useEffect(() => {
        async function cargarBebidas() {
            const respuesta = await obtenerBebidas()
            setTarjetasBebida(respuesta.data)
        }

        cargarBebidas()
    }, [])
    return (

        <>
            <h1 className="titulo">BEBIDAS</h1>

            <div className="tarjetas">
                {tarjetasBebida.map(e => (
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