import React from 'react'

export function Campo(props) {
    return (
        <>
            <label htmlFor={props.name}>{props.texto}</label>
            <input
                onChange= {props.onchange}
                type = {props.type}
                name = {props.name}
                id= {props.name}
                autoComplete="off"
                value={props.value}
            />
        </>
    )
}