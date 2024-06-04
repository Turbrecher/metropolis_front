import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarApellidos, validarNombre, validarPassword, validarUsername, validarEmail } from '../../autenticacion/Autenticadores';

export function FormularioCrearUsuarioAdministrador(props) {

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
    const [is_superuser, setIsSuperUser] = useState(false);


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
            "is_superuser":is_superuser
        };

        await axios.post(
            "http://localhost:8000/autenticacion/api/usuarios/create",
            usuario
        ).then((response)=>{
            alert("El usuario " + username + " se creó correctamente")
            console.log(response.data)
        }).catch((error)=>{
            alert("Ha ocurrido un error")
            console.log(error)
        });

    }


    return (

        <div className="admin">
            <div className="formulario_admin">
                <h1 className="titulo">CREAR USUARIO</h1>

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

                            if (!validarEmail(e.target.value)) {
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
                            if (!validarPassword(e.target.value)) {
                                setPasswordError("Contraseña inválida")
                            } else {
                                setPasswordError("")
                            }

                        }}
                    />
                    <h5 style={{ color: "red" }}>{passwordError}</h5>

                    <label>Es administrador</label>
                    <select
                    onChange={(e)=>{
                        setIsSuperUser(e.target.value)
                    }}>
                        <option value={false}>No</option>
                        <option value={true}>Sí</option>
                    </select>

                    <input
                        onClick={register}
                        className="submit"
                        type="button"
                        value={"Crear Usuario"}
                    />
                </form>
            </div>
        </div>

    )
}