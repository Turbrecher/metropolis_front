import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarAforo, validarFilaColumna, validarNombre } from '../../autenticacion/Autenticadores';

export function FormularioCrearSala(props) {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [aforo, setAforo] = useState("");
    const [aforoError, setAforoError] = useState("");

    const [sillones, setSillones] = useState([])
    const [sillonesSeleccionados, setSillonesSeleccionados] = useState([])

    const navigate = useNavigate()



    useEffect(() => {
        getSillones()
    }, [])

    async function getSillones() {
        await axios.get("http://localhost:8000/reserva/api/sillones/").
            then((response) => {
                setSillones(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }

    async function create() {

        let errores = false

        if (!validarNombre(nombre)) {
            setNombreError("Fila no válida")
            errores = true
        }

        if (!validarAforo(aforo)) {
            setAforoError("Columna no válida")
            errores = true
        }

        if (errores) {
            return
        }

        //Creamos JSON con el usuario
        let sala = {
            "nombre": nombre,
            "aforo": aforo,
            "sillones": sillonesSeleccionados
        };


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/reserva/api/salas/",
            sala
        ).then((response) => {

            alert("La sala con nombre: " + response.data.nombre + " y aforo: " + response.data.aforo + " ha sido creado!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">CREACIÓN DE SALA</h1>

                    <form>

                        <Campo
                            name="nombre"
                            type="text"
                            texto="Nombre"
                            onchange={(e) => {
                                setNombre(e.target.value)
                                if (!validarNombre(e.target.value)) {
                                    setNombreError("Nombre inválido")
                                } else {
                                    setNombreError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{nombreError}</h5>

                        <Campo
                            name="aforo"
                            type="text"
                            texto="Aforo"
                            onchange={(e) => {
                                setAforo(e.target.value)
                                if (!validarAforo(e.target.value)) {
                                    setAforoError("Aforo inválido")
                                } else {
                                    setAforoError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{aforoError}</h5>


                        <label>Sillones</label>

                        <select multiple onChange={(e) => {
                            let sillones = []

                            for (let i = 0; i < e.target.length; i++) {
                                if (e.target[i].selected) {
                                    sillones.push(e.target[i].value)
                                }
                            }

                            setSillonesSeleccionados(sillones)
                        }}>
                            {sillones.map((sillon) => (
                                <option value={sillon.id} key={sillon.id}>Fila {sillon.fila} // Columna {sillon.columna}</option>
                            ))}
                        </select>

                        <input
                            onClick={create}
                            className="submit"
                            type="button"
                            value={"Crear Sala"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}