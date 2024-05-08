import React from 'react'

export function Codigo(props) {
    return (
        <div className="codigo">
            <h4>{props.descripcion}</h4>
            <div className="colorcito" style={{ background: props.color }}></div>
        </div>
    )
}