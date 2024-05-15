import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "./Campo";
import { useNavigate } from "react-router-dom";

export function FormularioRegistro(props) {

    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function register() {
        
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
                        onchange={(e) => setUsername(e.target.value)}
                    />

                    <Campo
                        name="first_name"
                        type="text"
                        texto="Nombre"
                        onchange={(e) => setFirstName(e.target.value)}
                    />

                    <Campo
                        name="last_name"
                        type="text"
                        texto="Apellidos"
                        onchange={(e) => setLastName(e.target.value)}
                    />

                    <Campo
                        name="email"
                        type="text"
                        texto="Correo Electrónico"
                        onchange={(e) => setEmail(e.target.value)}
                    />

                    <Campo
                        name="pasword"
                        type="password"
                        texto="Contraseña"
                        onchange={(e) => setPassword(e.target.value)}
                    />

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