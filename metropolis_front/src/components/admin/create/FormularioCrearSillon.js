import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarFilaColumna } from '../../autenticacion/Autenticadores';

export function FormularioCrearSillon(props) {

    const [fila, setFila] = useState("");
    const [filaError, setFilaError] = useState("");
    const [columna, setColumna] = useState("");
    const [columnaError, setColumnaError] = useState("");



    const navigate = useNavigate()



    async function create() {

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


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/reserva/api/sillones/",
            sillon
        ).then((response) => {

            alert("El sillón con fila: " + response.data.fila + " y columna: " + response.data.columna +  " ha sido creado!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">CREACIÓN DE SILLÓN</h1>

                    <form action="" encType='multipart/form-data'>

                        <Campo
                            name="fila"
                            type="text"
                            texto="Fila"
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
                            onClick={create}
                            className="submit"
                            type="button"
                            value={"Crear Sillón"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}