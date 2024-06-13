import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarDescripcion, validarFechaExpiración, validarFoto, validarNombre, validarPrecio } from '../../autenticacion/Autenticadores';

export function FormularioEditarEntrada(props) {

    const [usuario, setUsuario] = useState("");
    const [sesion, setSesion] = useState("");
    const [sillon, setSillon] = useState("")
    const [tipo_entrada, setTipoEntrada] = useState("")
    const [fecha_compra, setFechaCompra] = useState()
    const [fecha_compra_error, setFechaCompraError] = useState()

    const [usuarios, setUsuarios] = useState([])
    const [sesiones, setSesiones] = useState([])
    const [sillones, setSillones] = useState([])
    const [tipos_entrada, setTiposEntrada] = useState([])

    const [entradaSeleccionada, setEntradaSeleccionada] = useState([])
    const [usuarioDeLaEntrada, setUsuarioDeLaEntrada] = useState([])
    const [sesionDeLaEntrada, setSesionDeLaEntrada] = useState([])
    const [sillonDeLaEntrada, setSillonDeLaEntrada] = useState([])
    const [tipoEntradaDeLaEntrada, setTipoEntradaDeLaEntrada] = useState([])

    const { key } = useParams()

    async function getEntradaSeleccionada() {
        axios.get("http://localhost:8000/reserva/api/entradas/" + key).
            then((response) => {
                setEntradaSeleccionada(response.data)
                setUsuarioDeLaEntrada(response.data.usuario)
                setSesionDeLaEntrada(response.data.sesion)
                setSillonDeLaEntrada(response.data.sillon)
                setTipoEntradaDeLaEntrada(response.data.tipo_entrada)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }


    async function getUsuarios() {
        axios.get("http://localhost:8000/autenticacion/api/usuarios/").
            then((response) => {
                setUsuarios(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }

    async function getSesiones() {
        axios.get("http://localhost:8000/reserva/api/sesiones/").
            then((response) => {
                setSesiones(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }

    async function getSillones() {
        axios.get("http://localhost:8000/reserva/api/sillones/").
            then((response) => {
                setSillones(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }

    async function getTiposEntrada() {
        axios.get("http://localhost:8000/compra/api/tiposentrada/").
            then((response) => {
                setTiposEntrada(response.data)
            }).
            catch((error) => {
                alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
            })
    }


    useEffect(() => {
        getEntradaSeleccionada()

        let date = new Date()
        setFechaCompra(date.toISOString().split('T')[0])

        getUsuarios()
        getSesiones()
        getSillones()
        getTiposEntrada()


    }, [])

    async function edit() {

        let errores = false



        //Creamos JSON con el usuario
        let entrada = {
            "usuario": usuario,
            "sesion": sesion,
            "sillon": sillon,
            "tipo_entrada": tipo_entrada,
            "fecha_compra": fecha_compra
        };

        if (!usuario) {
            entrada.usuario = usuarioDeLaEntrada.id
        }

        if (!sesion) {
            entrada.sesion = sesionDeLaEntrada.id
        }

        if (!sillon) {
            entrada.sillon = sillonDeLaEntrada.id
        }

        if (!tipo_entrada) {
            entrada.tipo_entrada = tipoEntradaDeLaEntrada.id
        }

        if (!fecha_compra) {
            entrada.fecha_compra = entradaSeleccionada.fecha_compra
        }


        //Hacemos la peticion POST a la API
        await axios.put(
            "http://localhost:8000/reserva/api/entradas/" + key + "/",
            entrada
        ).then((response) => {

            alert("La entrada con id: " + response.data.id + " ha sido editada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE ENTRADA</h1>

                    <form action="" encType='multipart/form-data'>



                        <label>Usuario</label>
                        <select onChange={(e) => {
                            setUsuario(e.target.value)
                        }}>
                            <option value={usuarioDeLaEntrada.id}>{usuarioDeLaEntrada.username}</option>
                            {usuarios.map((usuario) => (
                                <option key={usuario.id} value={usuario.id}>{usuario.username}</option>
                            ))}
                        </select>


                        <label>Sesion</label>
                        <select onChange={(e) => {
                            setSesion(e.target.value)
                        }}>

                            <option value={sesionDeLaEntrada.id}>{sesionDeLaEntrada.id}</option>


                            {sesiones.map((sesion) => (
                                <option key={sesion.id} value={sesion.id}>{sesion.id} // {sesion.pelicula.titulo} // {sesion.hora} // {sesion.sala.nombre}</option>
                            ))}
                        </select>

                        <label>Sillon</label>
                        <select onChange={(e) => {
                            setSillon(e.target.value)
                        }}>

                            <option value={sillonDeLaEntrada.id}>Fila {sillonDeLaEntrada.fila} // Columna {sillonDeLaEntrada.columna}</option>

                            {sillones.map((sillon) => (
                                <option key={sillon.id} value={sillon.id}>Fila {sillon.fila} // Columna {sillon.columna}</option>
                            ))}
                        </select>

                        <label>Tipo de Entrada</label>
                        <select onChange={(e) => {
                            setTipoEntrada(e.target.value)
                        }}>
                            <option value={tipoEntradaDeLaEntrada.id}>{tipoEntradaDeLaEntrada.nombre} // {tipoEntradaDeLaEntrada.precio}</option>
                            {tipos_entrada.map((tipo_entrada) => (
                                <option key={tipo_entrada.id} value={tipo_entrada.id}>{tipo_entrada.nombre} // {tipo_entrada.precio}</option>
                            ))}
                        </select>

                        <Campo name="fecha"
                            type="date"
                            texto="Fecha"
                            value={entradaSeleccionada.fecha_compra}
                            onchange={(e) => {
                                setFechaCompra(e.target.value)
                                if (!validarFechaExpiración(e.target.value)) {
                                    setFechaCompraError("Descripción inválida")
                                } else {
                                    setFechaCompraError("")
                                }
                            }} />


                        <input
                            onClick={edit}
                            className="submit"
                            type="button"
                            value={"Editar entrada"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}