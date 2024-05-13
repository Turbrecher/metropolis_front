import React from 'react'


export function TarjetaPelicula(props) {

    return (
        <a href={"/pelicula/" + props.id_pelicula}>
            <div className="pelicula">

                <div className="img">
                    <img
                        src={props.imagen}
                        alt=""
                    />
                </div>

                <h3>{props.titulo}</h3>

            </div>
        </a>
    )
}