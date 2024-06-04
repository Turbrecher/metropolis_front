import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarDescripcion, validarFoto, validarNombre, validarPrecio } from '../../autenticacion/Autenticadores';

export function FormularioCrearEntrada(props) {

    const [usuario, setUsuario] = useState("");
    const [sesion, setSesion] = useState("");
    const [sillon, setSillon] = useState("")
    const [tipo_entrada, setTipoEntrada] = useState("")
    const [fecha_compra, setFechaCompra] = useState()

    const [usuarios, setUsuarios] = useState([])
    const [sesiones, setSesiones] = useState([])
    const [sillones, setSillones] = useState([])
    const [tipos_entrada, setTiposEntrada] = useState([])


    const navigate = useNavigate()


    async function getUsuarios() {
        axios.get("http://localhost:8000/autenticacion/api/usuarios/").
            then((response) => {
                console.log(response.data)
                setUsuarios(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function getSesiones() {
        axios.get("http://localhost:8000/reserva/api/sesiones/").
            then((response) => {
                console.log(response.data)
                setSesiones(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function getSillones() {
        axios.get("http://localhost:8000/reserva/api/sillones/").
            then((response) => {
                console.log(response.data)
                setSillones(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function getTiposEntrada() {
        axios.get("http://localhost:8000/compra/api/tiposentrada/").
            then((response) => {
                console.log(response.data)
                setTiposEntrada(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {

        let date = new Date()
        setFechaCompra(date.toISOString().split('T')[0])

        getUsuarios()
        getSesiones()
        getSillones()
        getTiposEntrada()
    }, [])

    async function create() {

        let errores = false

        if (usuario === "") {
            errores = true
        }

        if (sesion === "") {
            errores = true
        }

        if (sillon === "") {
            errores = true
        }

        if (tipo_entrada === "") {
            errores = true
        }

        if (errores) {
            alert("No debe dejar datos sin elegir")
            return
        }

        //Creamos JSON con el usuario
        let entrada = {
            "usuario": usuario,
            "sesion": sesion,
            "sillon": sillon,
            "tipo_entrada": tipo_entrada,
            "fecha_compra": fecha_compra
        };


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/reserva/api/entradas/",
            entrada
        ).then((response) => {

            alert("La entrada con id: " + response.data.id + " ha sido creada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">CREACIÓN DE ENTRADA</h1>

                    <form action="" encType='multipart/form-data'>



                        <label>Pelicula</label>
                        <select onChange={(e) => {
                            setUsuario(e.target.value)
                        }}>
                            <option>Elija un usuario</option>
                            {usuarios.map((usuario) => (
                                <option key={usuario.id} value={usuario.id}>{usuario.username}</option>
                            ))}
                        </select>


                        <label>Sesion</label>
                        <select onChange={(e) => {
                            setSesion(e.target.value)
                        }}>
                            <option>Elija una sesion</option>
                            {sesiones.map((sesion) => (
                                <option key={sesion.id} value={sesion.id}>{sesion.pelicula.titulo} // {sesion.hora} // {sesion.sala.nombre}</option>
                            ))}
                        </select>

                        <label>Sillon</label>
                        <select onChange={(e) => {
                            setSillon(e.target.value)
                        }}>
                            <option>Elija un sillon</option>
                            {sillones.map((sillon) => (
                                <option key={sillon.id} value={sillon.id}>Fila {sillon.fila} // Columna {sillon.columna}</option>
                            ))}
                        </select>

                        <label>Tipo de Entrada</label>
                        <select onChange={(e) => {
                            setTipoEntrada(e.target.value)
                        }}>
                            <option>Elija una entrada</option>
                            {tipos_entrada.map((tipo_entrada) => (
                                <option key={tipo_entrada.id} value={tipo_entrada.id}>{tipo_entrada.nombre} // {tipo_entrada.precio}</option>
                            ))}
                        </select>


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