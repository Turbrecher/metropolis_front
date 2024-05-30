import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "./Campo";
import { useNavigate } from "react-router-dom";
import { validarApellidos, validarNombre, validarPassword, validarUsername, validarEmail } from './Autenticadores';

export function FormularioRegistro(props) {

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [first_name, setFirstName] = useState("");
    const [first_name_error, setFirstNameError] = useState("");
    const [last_name, setLastName] = useState("");
    const [last_name_error, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate()

    async function register() {
        let errores = false

        if(!validarUsername(username)){
            setUsernameError("Nombre de usuario no válido")
            errores = true
        }

        if(!validarNombre(first_name)){
            setFirstNameError("Nombre no válido")
            errores = true
        }

        if(!validarApellidos(last_name)){
            setLastNameError("Apellido/s no válido/s")
            errores = true
        }

        if(!validarEmail(email)){
            setEmailError("Email no válido")
            errores = true
        }

        if(!validarPassword(password)){
            setPasswordError("Contraseña no válida")
            errores = true
        }

        if(errores){
            return
        }


        let usuario = {
            "username": username,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
        };

        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/register",
            usuario
        );


        navigate("/login")

    }


    return (

        <div className="register">
            <div className="formulario_register">
                <h1 className="titulo">REGISTRARSE</h1>

                <form>
                    <Campo
                        name="username"
                        type="text"
                        texto="Nombre de usuario"
                        onchange={(e) => {
                            setUsername(e.target.value)
                            if(!validarUsername(username)){
                                setUsernameError("Nombre de usuario inválido")
                            }else{
                                setUsernameError("")
                            }
                        }
                            
                        }
                    />
                    <h5 style={{ color: "red" }}>{usernameError}</h5>

                    <Campo
                        name="first_name"
                        type="text"
                        texto="Nombre"
                        onchange={(e) => {
                            setFirstName(e.target.value)
                            if (!validarNombre(first_name)) {
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
                            if (!validarApellidos(last_name)) {
                                setLastNameError("Apellidos inválidos")
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

                            if (!validarEmail(email)) {
                                setEmailError("Email inválido")
                            } else {
                                setEmailError("")
                            }


                        }}
                    />
                    <h5 style={{ color: "red" }}>{emailError}</h5>

                    <Campo
                        name="pasword"
                        type="password"
                        texto="Contraseña"
                        onchange={(e) => {
                            setPassword(e.target.value)
                            if (!validarPassword(password)) {
                                setPasswordError("Contraseña inválida")
                            } else {
                                setPasswordError("")
                            }

                        }}
                    />
                    <h5 style={{ color: "red" }}>{passwordError}</h5>

                    <input
                        onClick={register}
                        className="submit"
                        type="button"
                        value={"Registrarse"}
                    />
                </form>

                <h4>¿Ya tienes una cuenta?</h4>
                <h4>
                    <a href="/login">Inicia Sesion</a>
                </h4>
            </div>
        </div>

    )
}