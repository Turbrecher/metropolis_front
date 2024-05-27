import React, { useState, useEffect } from 'react'
import axios from "axios";
import { getCookie } from "./getCookie";
import { useNavigate } from "react-router-dom";
import { Campo } from './Campo';

export function InfoPerfil(props) {
    const navigate = useNavigate()
    const [usuarios, setUsuarios] = useState([])

    const [username, setUsername] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [id, setId] = useState();

    let params = {}

    let config = {
        headers: {
            "Authorization": "Token " + getCookie("token")
        }
    };

    function setData(response) {
        setUsername(response.data.username)
        setFirstName(response.data.username)
        setLastName(response.data.username)
        setEmail(response.data.username)
        setId(response.data.id)

        document.getElementById("username").value = response.data.username
        document.getElementById("first_name").value = response.data.first_name
        document.getElementById("last_name").value = response.data.last_name
        document.getElementById("email").value = response.data.email
    }

    async function getUserInfo() {

        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/profile", params, config
        ).then((response) => {
            setData(response)


        }).catch(function (error) {
            console.log(error);
        });


    }

    async function edit() {

        let usuario = {
            "id": id,
            "username": username,
            "password": password,
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
                        name="id"
                        type="text"
                        texto="ID de usuario"
                        value={id}
                    />

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

                    <Campo
                        name="pasword"
                        type="password"
                        texto="Confirmar Contraseña"
                        onchange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        onClick={edit}
                        className="submit"
                        type="button"
                        value={"Editar perfil"}
                    />
                </form>
            </div>
        </div>

    )
}