import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarHora } from '../../autenticacion/Autenticadores';

export function FormularioCrearSesion(props) {

    const [pelicula, setPelicula] = useState("");
    const [sala, setSala] = useState("");
    const [hora, setHora] = useState("")
    const [errorHora, setErrorHora] = useState("")

    const [peliculas, setPeliculas] = useState([])
    const [salas, setSalas] = useState([])


    const navigate = useNavigate()


    async function getPeliculas() {
        axios.get("http://localhost:8000/cartelera/api/peliculas/").
            then((response) => {
                setPeliculas(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }

    async function getSalas() {
        axios.get("http://localhost:8000/reserva/api/salas/").
            then((response) => {
                setSalas(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }


    useEffect(() => {

        getPeliculas()
        getSalas()
    }, [])

    async function create() {

        let errores = false

        if (pelicula === "") {
            errores = true
        }

        if (sala === "") {
            errores = true
        }

        if (!validarHora(hora)) {
            setErrorHora("La hora no es válida")
            errores = true
        }

        if (errores) {
            alert("No debe dejar datos sin elegir")
            return
        }

        //Creamos JSON con el usuario
        let sesion = {
            "pelicula": pelicula,
            "sala": sala,
            "sillones_ocupados": [ ],
            "hora": hora,
        };


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/reserva/api/sesiones/",
            sesion
        ).then((response) => {

            alert("La sesion con id: " + response.data.id + " ha sido creada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">CREACIÓN DE SESIÓN</h1>

                    <form action="" encType='multipart/form-data'>

                        <label>Pelicula</label>
                        <select onChange={(e) => {
                            setPelicula(e.target.value)
                        }}>
                            <option>Elija una pelicula</option>
                            {peliculas.map((pelicula) => (
                                <option key={pelicula.id} value={pelicula.id}>{pelicula.titulo}</option>
                            ))}
                        </select>


                        <label>Sala</label>
                        <select onChange={(e) => {
                            setSala(e.target.value)
                        }}>
                            <option>Elija una sala</option>
                            {salas.map((sala) => (
                                <option key={sala.id} value={sala.id}>{sala.nombre}</option>
                            ))}
                        </select>

                        <Campo
                            type="time"
                            name="Hora"
                            texto="Hora"
                            onchange={(e)=>{
                                setHora(e.target.value)
                            }}
                        />
                        <h5 style={{ color: "red" }}>{errorHora}</h5>


                        <input
                            onClick={create}
                            className="submit"
                            type="button"
                            value={"Crear Sesión"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}