import React from 'react'
import { Tarjeta } from './Tarjeta'
import { obtenerMenus } from '../../api/menus.api';
import { useState, useEffect } from 'react';

export function Menus(props) {

    const [tarjetasMenu, setTarjetasMenu] = useState([])

    //Asignamos el valor del get a la variable TarjetasComida
    useEffect(() => {

        async function cargarMenus() {
            const respuesta = await obtenerMenus()
            setTarjetasMenu(respuesta.data)
        }

        cargarMenus()
    }, []);


    return (

        <>
            <h1 className="titulo">MENÚS</h1>

            <div className="tarjetas">
                {tarjetasMenu.map(e => (

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