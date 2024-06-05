import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarDescripcion, validarFoto, validarNombre, validarDuracion, validarPegi, validarFechaExpiración } from '../../autenticacion/Autenticadores';

export function FormularioEditarPelicula(props) {

    const [titulo, setTitulo] = useState("");
    const [tituloError, setTituloError] = useState("");

    const [director, setDirector] = useState("");
    const [directorError, setDirectorError] = useState("");

    const [genero, setGenero] = useState("");
    const [generoError, setGeneroError] = useState("");

    const [pegi, setPegi] = useState("");
    const [pegiError, setPegiError] = useState("");

    const [duracion, setDuracion] = useState("");
    const [duracionError, setDuracionError] = useState("");

    const [sinopsis, setSinopsis] = useState("");
    const [sinopsisError, setSinopsisError] = useState("");

    const [actores, setActores] = useState("");
    const [actoresError, setActoresError] = useState("");

    const [url_trailer, setUrlTrailer] = useState("");
    const [url_trailer_error, setUrlTrailerError] = useState("");

    const [cartel, setCartel] = useState()
    const [cartelError, setCartelError] = useState("")

    const [fecha_lanzamiento, setFechaLanzamiento] = useState("")
    const [fecha_lanzamiento_error, setFechaLanzamientoError] = useState("")

    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState("")


    const navigate = useNavigate()
    const { key } = useParams()

    useEffect(()=>{
        getPeliculaSeleccionadas()
    },[])

    async function getPeliculaSeleccionadas() {
        axios.get("http://localhost:8000/cartelera/api/peliculas/" + key).
            then((response) => {
                setPeliculaSeleccionada(response.data)
                setTitulo(response.data.titulo)
                setSinopsis(response.data.sinopsis)
                setGenero(response.data.genero)
                setPegi(response.data.pegi)
                setActores(response.data.actores)
                setDuracion(response.data.duracion)
                setUrlTrailer(response.data.url_trailer)
                setFechaLanzamiento(response.data.fecha_lanzamiento)
                setDirector(response.data.director)
                setCartel(response.data.cartel)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function edit() {

        let errores = false

        if (!validarNombre(titulo)) {
            setTituloError("Nombre no válido")
            errores = true
        }

        if (!validarNombre(url_trailer)) {
            setUrlTrailerError("URL no válido")
            errores = true
        }

        if (!validarDescripcion(sinopsis)) {
            setSinopsisError("Sinopsis no válida")
            errores = true
        }

        if (!validarDescripcion(actores)) {
            setActoresError("Actores no válidos")
            errores = true
        }

        if (!validarDescripcion(actores)) {
            setActoresError("Precio no válido")
            errores = true
        }

        if (!validarPegi(pegi)) {
            setPegiError("PEGI no válido")
            errores = true
        }

        if (!validarNombre(genero)) {
            setGeneroError("Género/s no válido")
            errores = true
        }

        if (!validarDuracion(duracion)) {
            setDuracionError("Duración no válida")
            errores = true
        }

        if (!validarFechaExpiración(fecha_lanzamiento)) {
            setFechaLanzamientoError("Fecha no válida")
            errores = true
        }

        

        //Creamos JSON con el usuario
        let pelicula = {
            "titulo": titulo,
            "url_trailer": url_trailer,
            "cartel": cartel,
            "sinopsis": sinopsis,
            "fecha_lanzamiento": fecha_lanzamiento,
            "genero": genero,
            "pegi": pegi,
            "duracion": duracion,
            "director": director,
            "actores": actores,
        };

        if (!validarFoto(cartel.type)) {
            setCartelError("Cartel no válido")
            errores = true
        }

        if (errores) {
            return
        }


        //Hacemos la peticion POST a la API
        await axios.put(
            "http://localhost:8000/cartelera/api/peliculas/" + key + "/",
            pelicula,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        ).then((response) => {

            alert("La pelicula con titulo: " + response.data.titulo + " ha sido editada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE PELÍCULA</h1>

                    <form action="" encType='multipart/form-data'>

                        <Campo
                            name="titulo"
                            type="text"
                            texto="Título"
                            value={titulo}
                            onchange={(e) => {
                                setTitulo(e.target.value)
                                if (!validarNombre(e.target.value)) {
                                    setTituloError("Título inválido")
                                } else {
                                    setTituloError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{tituloError}</h5>

                        <Campo
                            name="director"
                            type="text"
                            texto="Director"
                            value={director}
                            onchange={(e) => {
                                setDirector(e.target.value)
                                if (!validarNombre(e.target.value)) {
                                    setDirectorError("Director inválido")
                                } else {
                                    setDirectorError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{directorError}</h5>

                        <Campo
                            name="genero"
                            type="text"
                            texto="Género/s"
                            value={genero}
                            onchange={(e) => {
                                setGenero(e.target.value)
                                if (!validarNombre(e.target.value)) {
                                    setGeneroError("Género inválido")
                                } else {
                                    setGeneroError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{generoError}</h5>

                        <Campo
                            name="pegi"
                            type="text"
                            texto="Pegi"
                            value={pegi}
                            onchange={(e) => {
                                setPegi(e.target.value)
                                if (!validarPegi(e.target.value)) {
                                    setPegiError("PEGI inválido")
                                } else {
                                    setPegiError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{pegiError}</h5>

                        <Campo
                            name="duracion"
                            type="text"
                            texto="Duración en minutos"
                            value={duracion}
                            onchange={(e) => {
                                setDuracion(e.target.value)
                                if (!validarDuracion(e.target.value)) {
                                    setDuracionError("Duración inválido")
                                } else {
                                    setDuracionError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{duracionError}</h5>

                        <Campo
                            name="actores"
                            type="text"
                            texto="Actores"
                            value={actores}
                            onchange={(e) => {
                                setActores(e.target.value)
                                if (!validarNombre(e.target.value)) {
                                    setActoresError("Actor/es inválidos")
                                } else {
                                    setActoresError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{actoresError}</h5>

                        <Campo
                            name="url_trailer"
                            type="text"
                            texto="URL Trailer"
                            value={url_trailer}
                            onchange={(e) => {
                                setUrlTrailer(e.target.value)
                                if (!validarDescripcion(e.target.value)) {
                                    setUrlTrailerError("URL inválida")
                                } else {
                                    setUrlTrailerError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{url_trailer_error}</h5>



                        <label>Sinopsis</label>
                        <textarea value={sinopsis} rows={5} onChange={(e) => {
                            setSinopsis(e.target.value)
                            if (!validarDescripcion(e.target.value)) {
                                setSinopsisError("Sinopsis inválida")
                            } else {
                                setSinopsisError("")
                            }
                        }} />
                        <h5 style={{ color: "red" }}>{sinopsisError}</h5>

                        <Campo
                            name="cartel"
                            type="file"
                            texto="Cartel"
                            onchange={(e) => {
                                setCartel(e.target.files[0])
                                if (!validarFoto(e.target.files[0].type)) {
                                    setCartelError("Cartel inválido")
                                } else {
                                    setCartelError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{cartelError}</h5>

                        <Campo
                            name="fecha_lanzamiento"
                            type="date"
                            texto="Fecha de estreno"
                            value={fecha_lanzamiento}
                            onchange={(e) => {
                                setFechaLanzamiento(e.target.value)
                                if (!validarFechaExpiración(e.target.value)) {
                                    setFechaLanzamientoError("Fecha inválida")
                                } else {
                                    setFechaLanzamientoError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{fecha_lanzamiento_error}</h5>

                        <input
                            onClick={edit}
                            className="submit"
                            type="button"
                            value={"Editar película"}
                        />



                    </form>

                </div>

            </div>

        </>

    )
}