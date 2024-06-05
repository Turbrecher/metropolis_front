import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Campo } from "../../autenticacion/Campo";
import { useNavigate, useParams } from "react-router-dom";
import { validarHora } from '../../autenticacion/Autenticadores';

export function FormularioEditarSesion(props) {

    const [pelicula, setPelicula] = useState("");
    const [sala, setSala] = useState("");
    const [hora, setHora] = useState("")
    const [errorHora, setErrorHora] = useState("")

    const [salaDeLaSesion, setSalaDeLaSesion] = useState("")
    const [peliculaDeLaSesion, setPeliculaDeLaSesion] = useState("")
    const [sillonesOcupadosDeLaSesion, setSillonesOcupadosDeLaSesion] = useState("")
    const [horaDeLaSesion, setHoraDeLaSesion] = useState("")

    const [peliculas, setPeliculas] = useState([])
    const [salas, setSalas] = useState([])
    const {key} = useParams([])

    async function getSesionSeleccionada() {
        axios.get("http://localhost:8000/reserva/api/sesiones/" + key).
            then((response) => {
                setSalaDeLaSesion(response.data.sala)
                setPeliculaDeLaSesion(response.data.pelicula)
                setHoraDeLaSesion(response.data.hora)


                //Convertimos el input de json a un array de ids para su futura inserción.
                let sillones_ocupados = []
                for(let i = 0;i<response.data.sillones_ocupados.length;i++){
                    sillones_ocupados.push(response.data.sillones_ocupados[i].id)
                }

                setSillonesOcupadosDeLaSesion(sillones_ocupados)



            }).
            catch((error) => {
                console.log(error)
            })
    }


    async function getPeliculas() {
        axios.get("http://localhost:8000/cartelera/api/peliculas/").
            then((response) => {
                console.log(response.data)
                setPeliculas(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }

    async function getSalas() {
        axios.get("http://localhost:8000/reserva/api/salas/").
            then((response) => {
                console.log(response.data)
                setSalas(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {

        getPeliculas()
        getSalas()
        getSesionSeleccionada()
    }, [])

    async function create() {

        let errores = false

        

        //Creamos JSON con el usuario
        let sesion = {
            "pelicula": pelicula,
            "sala": sala,
            "sillones_ocupados": sillonesOcupadosDeLaSesion,
            "hora": hora,
        };


        if(!pelicula){
            sesion.pelicula = peliculaDeLaSesion.id
        }

        if(!sala){
            sesion.sala = salaDeLaSesion.id
        }

        if(!hora){
            sesion.hora = horaDeLaSesion
        }

        if (hora && !validarHora(hora)) {
            setErrorHora("La hora no es válida")
            errores = true
        }

        if (errores) {
            alert("No debe dejar datos sin elegir")
            return
        }


        //Hacemos la peticion PUT a la API
        await axios.put(
            "http://localhost:8000/reserva/api/sesiones/" + key + "/",
            sesion
        ).then((response) => {

            alert("La sesion con id: " + response.data.id + " ha sido editada!")

        }).catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error)
        });




    }


    return (

        <>

            <div className="admin">

                <div className="formulario_admin">
                    <h1 className="titulo">EDICIÓN DE SESIÓN</h1>

                    <form action="" encType='multipart/form-data'>

                        <label>Pelicula</label>
                        <select onChange={(e) => {
                            setPelicula(e.target.value)
                        }}>
                            <option value={peliculaDeLaSesion.id}>{peliculaDeLaSesion.titulo}</option>
                            {peliculas.map((pelicula) => (
                                <option key={pelicula.id} value={pelicula.id}>{pelicula.titulo}</option>
                            ))}
                        </select>


                        <label>Sala</label>
                        <select onChange={(e) => {
                            setSala(e.target.value)
                        }}>
                            <option value={salaDeLaSesion.id}>{salaDeLaSesion.nombre}</option>
                            {salas.map((sala) => (
                                <option key={sala.id} value={sala.id}>{sala.nombre}</option>
                            ))}
                        </select>

                        <Campo
                            type="time"
                            name="Hora"
                            texto="Hora"
                            value = {horaDeLaSesion}
                            onchange={(e)=>{
                                setHora(e.target.value)
                            }}
                        />
                        <h5 style={{ color: "red" }}>{errorHora}</h5>


                        <input
                            onClick={create}
                            className="submit"
                            type="button"
                            value={"Editar Sesión"}
                        />

                    </form>

                </div>

            </div>

        </>

    )
}