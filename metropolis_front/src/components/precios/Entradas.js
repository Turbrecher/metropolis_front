import React from 'react'
import {useEffect, useState} from 'react'
import { Tarjeta } from './Tarjeta'
import { obtenerEntradas } from '../../api/tipoSEntrada.api';

export function Entradas() {

    const [tarjetasPrecio, setTarjetasPrecio] = useState([])

    //Asignamos el valor del get a la variable TarjetasComida
    useEffect(() => {

        async function cargarPrecios() {
            const respuesta = await obtenerEntradas()
            setTarjetasPrecio(respuesta.data)
        }

        cargarPrecios()
    }, []);

    return (

        <>
            <h1 className="titulo">ENTRADAS</h1>
            <div className="tarjetas">

                {tarjetasPrecio.map((tarjeta)=>(
                    <Tarjeta
                    titulo={tarjeta.nombre}
                    descripcion={tarjeta.descripcion}
                    imagen={tarjeta.foto}
                    precio={tarjeta.precio}
                />
                ))}
            </div>
        </>

    )
}