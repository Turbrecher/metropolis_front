import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarDescripcion, validarFoto, validarNombre, validarPrecio } from '../../autenticacion/Autenticadores';

export function FormularioEditarMenu(props) {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [descripcionError, setDescripcionError] = useState("");
    const [foto, setFoto] = useState()
    const [fotoError, setFotoError] = useState("")
    const [precio, setPrecio] = useState("")
    const [precioError, setPrecioError] = useState("")

    const [comida, setComida] = useState("")
    const [bebida, setBebida] = useState("")

    const [comidas, setComidas] = useState([])
    const [bebidas, setBebidas] = useState([])


    const [menuSeleccionado, setMenuSeleccionado] = useState([])
    const [comidaDelMenu, setComidaDelMenu] = useState([])
    const [bebidaDelMenu, setBebidaDelMenu] = useState([])


    const { key } = useParams()



    const navigate = useNavigate()

    async function getMenuSeleccionado() {
        axios.get("http://localhost:8000/compra/api/menus/" + key).
            then((response) => {
                console.log(response.data)
                setMenuSeleccionado(response.data)
                setNombre(response.data.nombre)
                setDescripcion(response.data.descripcion)
                setFoto(response.data.foto)
                setPrecio(response.data.precio)
                setComidaDelMenu(response.data.comida)
                setBebidaDelMenu(response.data.bebida)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function getComidas() {
        axios.get("http://localhost:8000/compra/api/comidas/").
            then((response) => {
                console.log(response.data)
                setComidas(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function getBebidas() {
        axios.get("http://localhost:8000/compra/api/bebidas/").
            then((response) => {
                console.log(response.data)
                setBebidas(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getComidas()
        getBebidas()
        getMenuSeleccionado()
    }, [])



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
        let menu = {
            "nombre": nombre,
            "descripcion": descripcion,
            "foto": foto,
            "precio": precio,
            "comida": comida,
            "bebida": bebida,
        };

        if(!comida){
            menu.comida = comidaDelMenu.id
        }

        if(!bebida){
            menu.bebida = bebidaDelMenu.id
        }

        


        //Hacemos la peticion POST a la API
        await axios.put(
            "http://localhost:8000/compra/api/menus/" + key + "/",
            menu,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        ).then((response) => {

            alert("El menú con nombre: " + response.data.nombre + " ha sido editada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE MENÚ</h1>

                    <form action="" encType='multipart/form-data'>

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
                            name="descripcion"
                            type="text"
                            texto="Descripción"
                            value={descripcion}
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
                            value={precio}
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


                        <label>Comida</label>
                        <select onChange={(e) => {
                            setComida(e.target.value)
                        }}>
                            <option value={comidaDelMenu.id}>{comidaDelMenu.nombre}</option>
                            {comidas.map((comida) => (
                                <option key={comida.id} value={comida.id}>{comida.nombre}</option>
                            ))}
                        </select>

                        <label>Bebida</label>
                        <select onChange={(e) => {
                            setBebida(e.target.value)
                        }}>
                            <option value={bebidaDelMenu.id}>{bebidaDelMenu.nombre}</option>
                            {bebidas.map((bebida) => (
                                <option key={bebida.id} value={bebida.id}>{bebida.nombre}</option>
                            ))}
                        </select>

                        <input
                            onClick={edit}
                            className="submit"
                            type="button"
                            value={"Editar Menú"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}