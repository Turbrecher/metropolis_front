import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "./Campo";
import { useNavigate } from "react-router-dom";

export function FormularioLogin(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function login() {

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
            document.cookie = "token=" + response.data.token + "; path=/"
            //Redirigimos a la cartelera
            navigate("/cartelera")

        }).catch(function (error) {
            console.log(error);
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
                            onchange={(e) => setUsername(e.target.value)}
                        />

                        <Campo
                            name="pasword"
                            type="password"
                            texto="Contraseña"
                            onchange={(e) => setPassword(e.target.value)}
                        />

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