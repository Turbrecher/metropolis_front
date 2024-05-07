import React from 'react'

export function DetallesPelicula(props) {
    return (

        <>


            <div className="detallesPelicula">

                <div className='trailer'>
                    <video width={'100%'} controls>
                        <source src='../videos/unravel.mp4' />
                    </video>
                </div>

                <div className='informacionPelicula'>

                    <div className='portada'>
                        <img src='../images/carteles/cartel_jojo.jpg'></img>
                    </div>

                    <div className='informacion_principal'>
                        <h2>{props.titulo}</h2>

                        <h4>Director/es</h4>
                        <p>{props.director}</p>

                        <h4>Actores</h4>
                        <p>{props.actores}</p>

                        <h4>Sinopsis</h4>
                        <p>{props.sinopsis}</p>


                    </div>

                    <div className='informacion_adicional'>

                        <h4>Duracion</h4>
                        <p>{props.duracion}</p>

                        <h4>Fecha de estreno</h4>
                        <p>{props.fecha_estreno}</p>

                        <h4>Generos</h4>
                        //Poner generos

                        <h4>Clasificacion</h4>
                        <p>{props.pegi}</p>


                    </div>


                </div>

                <div className='sesionesPelicula'>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                    <div className='sesion'>
                        <h2>15:45</h2>
                        <h5>Sala 4</h5>
                    </div>

                </div>

            </div >


        </>

    )
}