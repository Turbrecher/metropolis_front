import React, { useState, useEffect } from 'react'
import axios from "axios";
import { getCookie } from "./getCookie";
import { useNavigate } from "react-router-dom";
import { Campo } from './Campo';
import { validarApellidos, validarNombre, validarEmail, validarPasswordPerfil } from './Autenticadores';
import { Entrada } from './Entrada';

export function InfoPerfil(props) {
    const navigate = useNavigate()

    const [username, setUsername] = useState();
    const [first_name, setFirstName] = useState();
    const [first_name_error, setFirstNameError] = useState("");
    const [last_name, setLastName] = useState();
    const [last_name_error, setLastNameError] = useState("");
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [id, setId] = useState();
    const [entradas_compradas, setEntradasCompradas] = useState([])

    let params = {}

    let config = {
        headers: {
            "Authorization": "Token " + getCookie("token")
        }
    };

    function setData(response) {
        setUsername(response.data.username)
        setFirstName(response.data.first_name)
        setLastName(response.data.last_name)
        setEmail(response.data.email)
        setId(response.data.id)

        document.getElementById("username").value = response.data.username
        document.getElementById("first_name").value = response.data.first_name
        document.getElementById("last_name").value = response.data.last_name
        document.getElementById("email").value = response.data.email
    }

    async function getEntradasUsuario(response) {

        //Hacemos la peticion GET a la API
        await axios.get(
            "http://localhost:8000/reserva/api/entradas/?usuario__id=" + response.data.id, params, config
        ).then((response) => {
            setEntradasCompradas(response.data)


        }).catch(function (error) {
            alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
        });

    }

    async function getUserInfo() {

        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/profile", params, config
        ).then((response) => {
            setData(response)

            getEntradasUsuario(response)


        }).catch(function (error) {
            alert("Ha ocurrido un error, no se ha podido acceder a los datos de la base de datos")
        });


    }

    async function edit() {


        let errores = false

        if (!validarNombre(first_name)) {
            setFirstNameError("Nombre no válido")
            errores = true
        }

        if (!validarApellidos(last_name)) {
            setLastNameError("Apellido/s no válido/s")
            errores = true
        }

        if (!validarEmail(email)) {
            setEmailError("Email no válido")
            errores = true
        }

        if (!validarPasswordPerfil(password)) {
            setPasswordError("Contraseña no válida")
            errores = true
        }

        if (errores) {
            return
        }


        let usuario = {
            "id": id,
            "username": username,
            "password": password,
            "confirm_password": confirm_password,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
        };

        await axios.put(
            "http://localhost:8000/autenticacion/api/usuarios/edit",
            usuario, config
        );


        navigate("/cartelera")

    }

    useEffect(() => {
        getUserInfo()
    }, [])




    return (

        <div className="profile">
            <div className="formulario_profile">
                <h1 className="titulo">Perfil de {username}</h1>

                <form>

                    <Campo
                        name="username"
                        type="text"
                        texto="Nombre de usuario"
                        value={username}
                    />

                    <Campo
                        name="first_name"
                        type="text"
                        texto="Nombre"
                        onchange={(e) => {
                            setFirstName(e.target.value)
                            if (!validarNombre(e.target.value)) {
                                setFirstNameError("Nombre inválido")
                            } else {
                                setFirstNameError("")
                            }
                        }}
                    />
                    <h5 style={{ color: "red" }}>{first_name_error}</h5>

                    <Campo
                        name="last_name"
                        type="text"
                        texto="Apellidos"
                        onchange={(e) => {
                            setLastName(e.target.value)
                            if (!validarApellidos(e.target.value)) {
                                setLastNameError("Apellido/s inválido/s")
                            } else {
                                setLastNameError("")
                            }
                        }}
                    />
                    <h5 style={{ color: "red" }}>{last_name_error}</h5>

                    <Campo
                        name="email"
                        type="text"
                        texto="Correo Electrónico"
                        onchange={(e) => {
                            setEmail(e.target.value)

                            if (!validarEmail(e.target.value)) {
                                setEmailError("Email inválido")
                            } else {
                                setEmailError("")
                            }


                        }}
                    />
                    <h5 style={{ color: "red" }}>{emailError}</h5>

                    <Campo
                        name="password"
                        type="password"
                        texto="Contraseña"
                        onchange={(e) => {
                            setPassword(e.target.value)
                            if (!validarPasswordPerfil(password)) {
                                setPasswordError("Contraseña inválida")
                            } else {
                                setPasswordError("")
                            }

                            if (password !== confirm_password) {
                                setPasswordError("No son iguales")
                            } else {
                                setPasswordError("")
                            }

                        }}
                    />
                    <h5 style={{ color: "red" }}>{passwordError}</h5>

                    <Campo
                        name="confirm_password"
                        type="password"
                        texto="Confirmar Contraseña"
                        onchange={(e) => {
                            setConfirmPassword(e.target.value)

                            if (!validarPasswordPerfil(password)) {
                                setPasswordError("Contraseña inválida")
                            } else {
                                setPasswordError("")
                            }

                            if (password !== e.target.value) {
                                setPasswordError("No son iguales")
                            } else {
                                setPasswordError("")
                            }

                        }}
                    />
                    <h5 style={{ color: "red" }}>{passwordError}</h5>

                    <input
                        onClick={edit}
                        className="submit"
                        type="button"
                        value={"Editar perfil"}
                    />


                </form>
            </div>


            <h1 className='titulo'>Tus entradas</h1>
            <div className='entradas_compradas'>

                {entradas_compradas.map(
                    (entrada) => (
                        <Entrada
                            foto=  {entrada.sesion.pelicula.cartel}
                            pelicula={entrada.sesion.pelicula.titulo}
                            hora={entrada.sesion.hora}
                            fecha_compra={entrada.fecha_compra}
                            fila={entrada.sillon.fila}
                            columna={entrada.sillon.columna}
                            id_entrada = {entrada.id}
                        />
                    )
                )
                }
            </div>
        </div>

    )
}