import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarAforo, validarFilaColumna, validarNombre } from '../../autenticacion/Autenticadores';

export function FormularioEditarSala(props) {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [aforo, setAforo] = useState("");
    const [aforoError, setAforoError] = useState("");

    const [sillones, setSillones] = useState([])
    const [sillonesSeleccionados, setSillonesSeleccionados] = useState([])

    const {key} = useParams()

    async function getSalaSeleccionada() {
        axios.get("http://localhost:8000/reserva/api/salas/" + key).
            then((response) => {
                console.log(response.data)
                setNombre(response.data.nombre)
                setAforo(response.data.aforo)

                let sillones_array = []
                for(let i=0;i<response.data.sillones.length;i++){
                    sillones_array.push(response.data.sillones[i].id)
                }

                setSillonesSeleccionados(sillones_array)
            }).
            catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        getSillones()
        getSalaSeleccionada()
    }, [])

    async function getSillones() {
        await axios.get("http://localhost:8000/reserva/api/sillones/").
            then((response) => {
                console.log(response.data)
                setSillones(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function edit() {

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


        //Hacemos la peticion PUT a la API
        await axios.put(
            "http://localhost:8000/reserva/api/salas/" + key + "/",
            sala
        ).then((response) => {

            alert("La sala con nombre: " + response.data.nombre + " y aforo: " + response.data.aforo + " ha sido editada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE SALA</h1>

                    <form>

                        <Campo
                            name="nombre"
                            type="text"
                            texto="Nombre"
                            value={nombre}
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
                            value={aforo}
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
                            console.log(sillones)
                        }}>

                            {sillones.map((sillon) => (
                                <option selected value={sillon.id} key={sillon.id}>Fila {sillon.fila} // Columna {sillon.columna}</option>
                            ))}
                        </select>

                        <input
                            onClick={edit}
                            className="submit"
                            type="button"
                            value={"Editar Sala"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}