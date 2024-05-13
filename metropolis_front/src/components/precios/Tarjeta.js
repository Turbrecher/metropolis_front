import React from 'react'

export function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <h1>{props.titulo}</h1>
            <h3 className="dias">{props.descripcion}</h3>
            <div className="img">
                <img src={props.imagen} alt="" />
            </div>
            <h1 className="precio">{props.precio} €</h1>
        </div>
    )
}