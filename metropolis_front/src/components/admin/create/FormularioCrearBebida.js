import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarUsername, validarPassword, validarNombre } from '../../autenticacion/Autenticadores';

export function FormularioCrearBebida(props) {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [descripcionError, setDescripcionError] = useState("");
    const [foto, setFoto] = useState()
    const [fotoError, setFotoError] = useState("")
    const [precio, setPrecio] = useState("")
    const [precioError, setPrecioError] = useState("")


    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")

    const navigate = useNavigate()



    async function create() {

        let errores = false

        if(!validarNombre(username)){
            setUsernameError("Nombre de usuario no válido")
            errores = true
        }

        

        if(errores){
            return
        }





        //Creamos JSON con el usuario
        let bebida = {
            "nombre": nombre,
            "descripcion": descripcion,
            "foto": foto,
            "precio": precio,
        };


        //Hacemos la peticion POST a la API
        await axios.post(
            "http://localhost:8000/compra/api/bebidas/",
            bebida
        ).then((response) => {

            alert("La bebida con nombre: " + response.data.nombre + " ha sido creada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">CREACIÓN DE BEBIDA</h1>

                    <form action="">

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
                            }}
                        />
                        <h5 style={{ color: "red" }}>{usernameError}</h5>

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
                            onClick={create}
                            className="submit"
                            type="button"
                            value={"Crear bebida"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}