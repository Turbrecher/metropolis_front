import React, { useState } from 'react'
import axios from "axios";
import { Campo } from "../autenticacion/Campo";
import { useNavigate } from "react-router-dom";
import { validarApellidos, validarNombre, validarEmail } from '../autenticacion/Autenticadores';

export function FormularioContacto(props) {


    const [first_name, setFirstName] = useState("");
    const [first_name_error, setFirstNameError] = useState("");
    const [last_name, setLastName] = useState("");
    const [last_name_error, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const navigate = useNavigate()

    async function contact() {
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

        if (errores) {
            return
        }



        navigate("/cartelera")

    }


    return (

        <div className="contacto">

            <div className="formulario_contacto">
                <h1 className="titulo">CONTACTO</h1>

                <form>

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

                    <label for="mensaje">Mensaje</label>
                    <textarea rows="6" name="mensaje" id="mensaje" />

                    <input
                        onClick={contact}
                        className="submit"
                        type="button"
                        value={"Registrarse"}
                    />
                </form>

                <div className="mapa">
                    <iframe title='Mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.3941503507313!2d-6.944969987848608!3d37.26207954141019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d0202ac6975f%3A0x202c4d07f4aa438c!2sIES%20San%20Sebastián!5e0!3m2!1ses!2ses!4v1712834894790!5m2!1ses!2ses"
                        width={'100%'} height={'400px'} frameborder="0"></iframe>
                </div>

            </div>

        </div>

    )
}