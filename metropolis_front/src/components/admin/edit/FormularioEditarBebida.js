import React, { useState, useEffect} from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarDescripcion, validarFoto, validarNombre, validarPrecio } from '../../autenticacion/Autenticadores';

export function FormularioEditarBebida(props) {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [descripcionError, setDescripcionError] = useState("");
    const [foto, setFoto] = useState()
    const [fotoError, setFotoError] = useState("")
    const [precio, setPrecio] = useState("")
    const [precioError, setPrecioError] = useState("")
    const [BebidaSeleccionada, setBebidaSeleccionada] = useState([])

    const {key} = useParams()


    useEffect(()=>{
        getBebidaSeleccionada()
    }, [])


    async function getBebidaSeleccionada() {
        axios.get("http://localhost:8000/compra/api/bebidas/" + key).
            then((response) => {
                console.log(response.data)
                setBebidaSeleccionada(response.data)
                setNombre(response.data.nombre)
                setDescripcion(response.data.descripcion)
                setFoto(response.data.foto)
                setPrecio(response.data.precio)
            }).
            catch((error) => {
                console.log(error)
            })
    }


    async function edit() {

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
        let bebida = {
            "nombre": nombre,
            "descripcion": descripcion,
            "foto": foto,
            "precio": precio,
        };


        //Hacemos la peticion POST a la API
        await axios.put(
            "http://localhost:8000/compra/api/bebidas/" + key +"/",
            bebida,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        ).then((response) => {

            alert("La bebida con nombre: " + response.data.nombre + " ha sido editada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE BEBIDA</h1>

                    <form action="" encType='multipart/form-data'>

                        <Campo
                            name="nombre"
                            type="text"
                            texto="Nombre"
                            value = {nombre}
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
                            value = {descripcion}
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
                            value = {precio}
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
                            onClick={edit}
                            className="submit"
                            type="button"
                            value={"Editar bebida"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}