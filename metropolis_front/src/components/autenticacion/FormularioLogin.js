import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "./Campo";
import { useNavigate } from "react-router-dom";
import { validarUsername, validarPassword } from './Autenticadores';

export function FormularioLogin(props) {

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate()



    async function login() {



        //Validamos los datos introducidos por el usuario
        if (!validarUsername(username)) {
            setUsernameError("El usuario no es valido")
            return
        } else {
            setUsernameError(" ")
        }

        if (!validarPassword(password)) {
            setPasswordError("La contraseña no es valida")

            return
        } else {
            setPasswordError("")
        }





        //Creamos JSON con el usuario
        let usuario = {
            "username": username,
            "password": password
        };


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/login",
            usuario
        ).then((response) => {

            if (response.data.token) {
                document.cookie = "token=" + response.data.token + "; path=/"
                //Redirigimos a la cartelera
                navigate("/cartelera")
            } else {
                setPasswordError("La contraseña o el usuario no son correctos")
            }

        }).catch(function (error) {
            setPasswordError("La contraseña o el usuario no son correctos")
        });




    }


    return (

        <>

            <div className="login">

                <div className="formulario_login">
                    <h1 className="titulo">INICIAR SESION</h1>

                    <form action="">

                        <Campo
                            name="username"
                            type="text"
                            texto="Nombre de usuario"
                            onchange={(e) => {
                                setUsername(e.target.value)
                                validarUsername(e.target.value)
                            }}
                        />
                        <h5 style={{ color: "red" }}>{usernameError}</h5>

                        <Campo
                            name="pasword"
                            type="password"
                            texto="Contraseña"
                            onchange={(e) => {
                                setPassword(e.target.value)
                                validarPassword(e.target.value)
                            }}
                        />
                        <h5 style={{ color: "red" }}>{passwordError}</h5>

                        <input
                            onClick={login}
                            className="submit"
                            type="button"
                            value={"Iniciar sesion"}
                        />

                    </form>

                    <h4>¿No tienes una cuenta?</h4>
                    <h4><a href="/register">Crear una cuenta</a></h4>

                </div>

            </div>

        </>

    )
}