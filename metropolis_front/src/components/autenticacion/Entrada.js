import React from 'react'
import download from "../../images/descargar.png"

export function Entrada(props) {
    return (

        <>

            <div className="entrada">
                <div className='cartel'>
                    <img src={props.foto}></img>
                </div>

                <div className='informacion'>
                    <h4>{props.pelicula}  -- {props.hora}</h4>
                    <h4>{props.fecha_compra}</h4>
                    <h4>Fila {props.fila} - Columna {props.columna}</h4>
                    <a target='__blank' href={'http://localhost:8000/reserva/entradas/descargar/' + props.id_entrada}>Descargar</a>
                </div>



            </div>



        </>

    )
}