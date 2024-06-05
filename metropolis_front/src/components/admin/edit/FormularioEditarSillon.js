import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarFilaColumna } from '../../autenticacion/Autenticadores';

export function FormularioEditarSillon(props) {

    const [fila, setFila] = useState("");
    const [filaError, setFilaError] = useState("");
    const [columna, setColumna] = useState("");
    const [columnaError, setColumnaError] = useState("");
    const [sillonSeleccionado, setSillonSeleccionado] = useState("");

    const {key} = useParams()



    const navigate = useNavigate()

    useEffect(()=>{
        getSillonSeleccionado()
    },[])


    async function getSillonSeleccionado() {
        axios.get("http://localhost:8000/reserva/api/sillones/" + key).
            then((response) => {
                console.log(response.data)
                setSillonSeleccionado(response.data)
                setFila(response.data.fila)
                setColumna(response.data.columna)
            }).
            catch((error) => {
                console.log(error)
            })
    }



    async function edit() {

        let errores = false

        if (!validarFilaColumna(fila)) {
            setFilaError("Fila no válida")
            errores = true
        }

        if (!validarFilaColumna(columna)) {
            setColumnaError("Columna no válida")
            errores = true
        }

        if (errores) {
            return
        }

        //Creamos JSON con el usuario
        let sillon = {
            "fila": fila,
            "columna": columna
        };


        //Hacemos la peticion PUT a la API
        await axios.put(
            "http://localhost:8000/reserva/api/sillones/" + key + "/",
            sillon
        ).then((response) => {

            alert("El sillón con fila: " + response.data.fila + " y columna: " + response.data.columna +  " ha sido editado!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE SILLÓN</h1>

                    <form action="" encType='multipart/form-data'>

                        <Campo
                            name="fila"
                            type="text"
                            texto="Fila"
                            value={fila}
                            onchange={(e) => {
                                setFila(e.target.value)
                                if (!validarFilaColumna(e.target.value)) {
                                    setFilaError("Fila inválida")
                                } else {
                                    setFilaError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{filaError}</h5>

                        <Campo
                            name="columna"
                            type="text"
                            texto="Columna"
                            value={columna}
                            onchange={(e) => {
                                setColumna(e.target.value)
                                if (!validarFilaColumna(e.target.value)) {
                                    setColumnaError("Columna inválida")
                                } else {
                                    setColumnaError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{columnaError}</h5>

                        <input
                            onClick={edit}
                            className="submit"
                            type="button"
                            value={"Editar Sillón"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}