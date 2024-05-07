import React from 'react'

export function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <h1>{props.titulo}</h1>
            <h3 class="dias">{props.descripcion}</h3>
            <div class="img">
                <img src={props.imagen} alt="" />
            </div>
            <h1 class="precio">{props.precio} €</h1>
        </div>
    )
}