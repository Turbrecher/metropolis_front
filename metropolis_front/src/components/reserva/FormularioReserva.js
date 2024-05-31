import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Campo } from "../autenticacion/Campo";
import { useParams, useNavigate, json } from "react-router-dom";
import { getCookie } from "../autenticacion/getCookie";
import {validarNumeroTarjeta, validarCodigoTarjeta, validarNombre, validarFechaExpiración, agregarCero} from "../autenticacion/Autenticadores"

export function FormularioPago(props) {

    const [nombre, setNombre] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [errorNumeroTarjeta, setErrorNumeroTarjeta] = useState("");
    const [fechaExpiracion, setFechaExpiracion] = useState("");
    const [errorFechaExpiracion, setErrorFechaExpiracion] = useState("");
    const [codigoTarjeta, setCodigoTarjeta] = useState("");
    const [errorCodigoTarjeta, setErrorCodigoTarjeta] = useState("");

    const [usuario, setUsuario] = useState([])
    const [sesion, setSesion] = useState([])
    const [sillon, setSillon] = useState([])
    const [tipoEntrada, setTipoEntrada] = useState([])

    const { id_sesion, id_sillon } = useParams()
    const navigate = useNavigate()

    function tarjetavalidez() {
        let validez = true

        setErrorNombre("")
        setErrorNumeroTarjeta("")
        setErrorFechaExpiracion("")
        setErrorCodigoTarjeta("")

        if(!validarNombre(nombre)){
            validez = false
            setErrorNombre("El nombre no es válido")
        }

        if(!validarNumeroTarjeta(numeroTarjeta)){
            validez = false
            setErrorNumeroTarjeta("El número de la tarjeta no es válido")
        }

        if(!validarFechaExpiración(fechaExpiracion)){
            validez = false
            setErrorFechaExpiracion("La fecha introducida no es válida")
        }

        if(!validarCodigoTarjeta(codigoTarjeta)){
            validez = false
            setErrorCodigoTarjeta("El codigo de la tarjeta introducida no es válido")
        }

        return validez
    }

    let params = {}

    let config = {
        headers: {
            "Authorization": "Token " + getCookie("token")
        }
    };

    //Funcion que almacena todos los datos de un json en un array
    function json_to_array(json) {
        let array = []

        for (var i in json) {
            array.push(json[i].id)
        }

        return array

    }


    //Funcion que obtiene los datos del usuario autenticado.
    async function getUserInfo() {

        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/profile", params, config

        ).then(//Recibir la respuesta
            (response) => {
                setUsuario(response.data)
                console.log(response.data)


            }).catch(//Caso de error
                (error) => {
                    console.log(error);

                });


    }

    //Funcion que obtiene los datos de la sesion para la que se quiere comprar entrada
    async function getSesion() {

        await axios.get(
            "http://localhost:8000/reserva/api/sesiones/" + id_sesion
        ).then(//Recibir la respuesta
            (response) => {
                setSesion(response.data)
                console.log(response.data)
            }
        ).catch(//Caso de error
            (error) => {
                console.log(error)
            })

    }

    //Funcion que obtiene el sillon seleccionado
    async function getSillon() {

        await axios.get(
            "http://localhost:8000/reserva/api/sillones/" + id_sillon
        ).then(//Recibir la respuesta
            (response) => {
                setSillon(response.data)
                console.log(response.data)
            }
        ).catch(//Caso de error
            (error) => {
                console.log(error)
            })

    }

    //Funcion que obtiene el tipo de entrada dependiendo del dia actual
    async function getTipoEntrada() {
        let nombreEntrada = ""
        let date = new Date().toLocaleString('en-us', { weekday: 'long' })

        //Elegimos el tipo de entrada dependiendo del dia de la semana
        switch (date) {
            //Entrada de diario
            case "Monday":
            case "Tuesday":
            case "Thursday":
                nombreEntrada = "DIARIO"
                break;

            //Entrada dia del espectador
            case "Wednesday":
                nombreEntrada = "DIA DEL ESPECTADOR"
                break;

            //Entrada fiestas y fines de semana
            case "Friday":
            case "Saturday":
            case "Sunday":
            default:
                nombreEntrada = "FESTIVOS"
        }




        //Obtenemos el tipo de entrada correspondiente
        await axios.get(
            "http://localhost:8000/compra/api/tiposentrada/?nombre=" + nombreEntrada
        ).then(//Recibir la respuesta
            (response) => {
                setTipoEntrada(response.data[0])
                console.log(response.data[0])
            }
        ).catch(//Caso de error
            (error) => {
                console.log(error)
            })

    }


    //Funcion que se encarga de editar el sillon ocupado de la sesion actual de cine en la BD
    async function ocuparSillon() {
        //Agregamos el sillon ocupado a la sesion
        sesion.sillones_ocupados.push(sillon)
        let sillonesOcupados = json_to_array(sesion.sillones_ocupados)


        let sesion_subida = {
            "pelicula": sesion.pelicula.id,
            "sala": sesion.sala.id,
            "hora": sesion.hora,
            "sillones_ocupados": sillonesOcupados
        }

        //Hacemos la peticion POST a la API para editar la sesion con ahora el sillon ocupado
        await axios.put(
            "http://localhost:8000/reserva/api/sesiones/" + sesion.id + "/",
            sesion_subida
        ).then((response) => {
            console.log("Correcto cambio de sesion")
            //Redirigimos a la cartelera
            navigate("/cartelera")

        }).catch(function (error) {
            console.log(error);
        });
    }

    //Funcion que se encarga de agregar una nueva entrada en la BD
    async function agregarEntrada() {
        let date = new Date()
        let fecha_compra = date.toISOString().split('T')[0]
        
        alert(fecha_compra)

        //Creamos JSON con el usuario
        let entrada = {
            "usuario": usuario.id,
            "sesion": sesion.id,
            "sillon": sillon.id,
            "fecha_compra": fecha_compra,
            "tipo_entrada": tipoEntrada.id

        };


        //Hacemos la peticion POST a la API para subir la entrada
        await axios.post(
            "http://localhost:8000/reserva/api/entradas/",
            entrada
        ).then((response) => {
            console.log("Correcta subida de entrada")

        }).catch(function (error) {
            console.log(error);
        });
    }

    async function efectuar_pago(){
        return true
    }


    //Funcion que efectua el pago y se ejecuta al pulsar sobre el boton de pagar
    async function pagar() {

        //Si los datos de la tarjeta no son válidos
        if (!tarjetavalidez()) {
            return
        }

        efectuar_pago()

        await ocuparSillon()
        await agregarEntrada()

        navigate("/profile")

    }

    //FUNCION QUE SE EJECUTA AL CARGAR POR PRIMERA VEZ LA PAGINA
    useEffect(() => {
        //CARGAMOS LOS DATOS DEL USUARIO
        getUserInfo()

        //CARGAMOS LOS DATOS DE LA SESION
        getSesion()

        //CARGAMOS LOS DATOS DEL SILLON
        getSillon()

        //CARGAMOS LOS DATOS DEL TIPO DE ENTRADA
        getTipoEntrada()

    }, [])


    //LO QUE MUESTRA AL USUARIO
    return (

        <>

            <div className="pago">

                <div className="formulario_pago">
                    <h1 className="titulo">PAGO CON TARJETA</h1>

                    <form action="">

                        <Campo
                            name="nombre"
                            type="text"
                            texto="Nombre"
                            onchange={(e) => setNombre(e.target.value)}
                        />
                        <h5 style={{ color: "red" }}>{errorNombre}</h5>

                        <Campo
                            name="numero_tarjeta"
                            type="text"
                            texto="Número de tarjeta"
                            onchange={(e) => setNumeroTarjeta(e.target.value)}
                        />
                        <h5 style={{ color: "red" }}>{errorNumeroTarjeta}</h5>

                        <Campo
                            name="fecha_expiracion"
                            type="date"
                            texto="Fecha de expiración"
                            onchange={(e) => setFechaExpiracion(e.target.value)}
                        />
                        <h5 style={{ color: "red" }}>{errorFechaExpiracion}</h5>


                        <Campo
                            name="codigo_tarjeta"
                            type="text"
                            texto="Código"
                            onchange={(e) => setCodigoTarjeta(e.target.value)}
                        />
                        <h5 style={{ color: "red" }}>{errorCodigoTarjeta}</h5>


                        <input
                            onClick={pagar}
                            className="submit"
                            type="button"
                            value={"Efectuar pago"}
                        />

                    </form>


                </div>

            </div>

        </>

    )
}