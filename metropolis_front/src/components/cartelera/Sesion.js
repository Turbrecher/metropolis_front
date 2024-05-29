import React from 'react'


export function Sesion(props) {

    return (
        <a href={"/reserva/" + props.id_sesion}>
            <div className='sesion'>
                <h2>{props.hora}</h2>
                <h5>{props.sala}</h5>
            </div>
        </a>
    )
}