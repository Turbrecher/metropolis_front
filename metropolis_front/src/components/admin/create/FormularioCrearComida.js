import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarDescripcion, validarFoto, validarNombre, validarPrecio } from '../../autenticacion/Autenticadores';

export function FormularioCrearComida(props) {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [descripcionError, setDescripcionError] = useState("");
    const [foto, setFoto] = useState()
    const [fotoError, setFotoError] = useState("")
    const [precio, setPrecio] = useState("")
    const [precioError, setPrecioError] = useState("")


    const navigate = useNavigate()



    async function create() {

        let errores = false

        if (!validarNombre(nombre)) {
            setNombreError("Nombre no válido")
            errores = true
        }

        if (!validarDescripcion(descripcion)) {
            setDescripcionError("Descripción no válida")
            errores = true
        }

        if (!validarFoto(foto.type)) {
            setFotoError("Foto no válida")
            errores = true
        }

        if (!validarPrecio(precio)) {
            setPrecioError("Precio no válido")
            errores = true
        }

        if (errores) {
            return
        }

        //Creamos JSON con el usuario
        let comida = {
            "nombre": nombre,
            "descripcion": descripcion,
            "foto": foto,
            "precio": precio,
        };


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/compra/api/comidas/",
            comida,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        ).then((response) => {

            alert("La comida con nombre: " + response.data.nombre + " ha sido creada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">CREACIÓN DE COMIDA</h1>

                    <form action="" encType='multipart/form-data'>

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
                            name="descripcion"
                            type="text"
                            texto="Descripción"
                            onchange={(e) => {
                                setDescripcion(e.target.value)
                                if (!validarDescripcion(e.target.value)) {
                                    setDescripcionError("Descripción inválida")
                                } else {
                                    setDescripcionError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{descripcionError}</h5>

                        <Campo
                            name="foto"
                            type="file"
                            texto="Foto"
                            onchange={(e) => {
                                setFoto(e.target.files[0])
                                console.log(e.target.files[0])
                                if (!validarFoto(e.target.files[0].type)) {
                                    setFotoError("Foto inválida")
                                } else {
                                    setFotoError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{fotoError}</h5>


                        <Campo
                            name="precio"
                            type="text"
                            texto="Precio"
                            onchange={(e) => {
                                setPrecio(e.target.value)
                                if (!validarPrecio(e.target.value)) {
                                    setPrecioError("Precio inválido")
                                } else {
                                    setPrecioError("")
                                }
                            }}
                        />
                        <h5 style={{ color: "red" }}>{precioError}</h5>

                        <input
                            onClick={create}
                            className="submit"
                            type="button"
                            value={"Crear comida"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}