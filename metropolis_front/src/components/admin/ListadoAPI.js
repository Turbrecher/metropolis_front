import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ListadoAPI(props) {


    const navigate = useNavigate()
    const [objetosJSON, setObjetosJSOn] = useState([])
    const [url, setUrl] = useState("")
    const [tipoDato, setTipoDato] = useState("")

    useEffect(() => {

        switch (url) {
            case "http://localhost:8000/autenticacion/api/usuarios/":
                break

            case "http://localhost:8000/cartelera/api/peliculas/":
                return objetosJSON.map(
                    (pelicula) => (
                        <div key={pelicula.id}>
                            <img src={pelicula.cartel}></img>
                            <h2>Titulo: {pelicula.titulo}</h2>
                            <h2>Sinopsis: {pelicula.sinopsis}</h2>
                            <h2>Genero: {pelicula.genero}</h2>
                            <h2>PEGI: {pelicula.pegi}</h2>
                            <h2>URL trailer: {pelicula.url_trailer}</h2>
                            <h2>Fecha de estreno: {pelicula.fecha_lanzamiento}</h2>
                            <h2>Duracion: {pelicula.duracion} minutos</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/sesiones/":
                return objetosJSON.map(
                    (sesion) => (
                        <div key={sesion.id}>
                            <h2>Pelicula: {sesion.pelicula.titulo}</h2>
                            <h2>Hora: {sesion.hora}</h2>
                            <h2>Sala: {sesion.sala.nombre}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/entradas/":
                return objetosJSON.map(
                    (entrada) => (
                        <div key={entrada.id}>
                            <h2>Usuario: {entrada.usuario.username}</h2>
                            <h2>Sesion: {entrada.sesion.pelicula.titulo} // {entrada.sesion.hora}</h2>
                            <h2>Sala: {entrada.sesion.sala.nombre}</h2>
                            <h2>Sillon: Fila {entrada.sillon.fila}, Columna {entrada.sillon.columna}</h2>
                            <h2>Tipo de entrada: {entrada.tipo_entrada.nombre}</h2>
                            <h2>Precio pagado: {entrada.tipo_entrada.precio}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/salas/":
                return objetosJSON.map(
                    (sala) => (
                        <div key={sala.id}>
                            <h2>Nombre: {sala.nombre}</h2>
                            <h2>Aforo: {sala.aforo}</h2>
                            <h2>Sillones: {sala.sillones.length}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/sillones/":
                return objetosJSON.map(
                    (sillon) => (
                        <div key={sillon.id}>
                            <h2>Fila: {sillon.fila}</h2>
                            <h2>Columna: {sillon.columna}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/comidas/":
                return objetosJSON.map(
                    (comida) => (
                        <div key={comida.id}>
                            <h2>Nombre: {comida.nombre}</h2>
                            <h2>Descripción: {comida.descripcion}</h2>
                            <h2>Precio: {comida.precio}</h2>
                            <img src={comida.foto}></img>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/bebidas/":
                return objetosJSON.map(
                    (bebida) => (
                        <div key={bebida.id}>
                            <h2>Nombre: {bebida.nombre}</h2>
                            <h2>Descripción: {bebida.descripcion}</h2>
                            <h2>Precio: {bebida.precio}</h2>
                            <img src={bebida.foto}></img>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/menus/":
                return objetosJSON.map(
                    (menu) => (
                        <div key={menu.id}>
                            <h2>Nombre: {menu.nombre}</h2>
                            <h2>Comida: {menu.comida.nombre}</h2>
                            <h2>Bebida: {menu.bebida.nombre}</h2>
                            <h2>Descripción: {menu.descripcion}</h2>
                            <h2>Precio: {menu.precio}</h2>
                            <img src={menu.foto}></img>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/tiposentrada/":
                return objetosJSON.map(
                    (tipoEntrada) => (
                        <div key={tipoEntrada.id}>
                            <h2>Nombre: {tipoEntrada.nombre}</h2>
                            <h2>Descripción: {tipoEntrada.descripcion}</h2>
                            <h2>Precio: {tipoEntrada.precio}</h2>
                            <img src={tipoEntrada.foto}></img>
                        </div>

                    )
                )

            default:
                return "No hay datos todavia, elija una de las opciones del selector."
                break
        }
    }, [url])

    async function loadData(e) {

        if (e.target.value == " ") {
            return
        }

        await axios.get(e.target.value).
            then(
                (response) => {
                    setUrl(e.target.value)
                    setObjetosJSOn(response.data)
                    console.log(response.data)
                }).
            catch(
                (error) => {
                    console.log(error)
                }
            );

    }


    function createList() {

        switch (url) {
            case "http://localhost:8000/autenticacion/api/usuarios/":
                return objetosJSON.map(
                    (usuario) => (
                        <div key={usuario.id}>
                            <h2>Nombre de usuario: {usuario.username}</h2>
                            <h2>Nombre: {usuario.first_name}</h2>
                            <h2>Apellidos: {usuario.last_name}</h2>
                            <h2>Email: {usuario.email}</h2>

                        </div>

                    )
                )

            case "http://localhost:8000/cartelera/api/peliculas/":
                return objetosJSON.map(
                    (pelicula) => (
                        <div key={pelicula.id}>
                            <img src={pelicula.cartel}></img>
                            <h2>Titulo: {pelicula.titulo}</h2>
                            <h2>Sinopsis: {pelicula.sinopsis}</h2>
                            <h2>Genero: {pelicula.genero}</h2>
                            <h2>PEGI: {pelicula.pegi}</h2>
                            <h2>URL trailer: {pelicula.url_trailer}</h2>
                            <h2>Fecha de estreno: {pelicula.fecha_lanzamiento}</h2>
                            <h2>Duracion: {pelicula.duracion} minutos</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/sesiones/":
                return objetosJSON.map(
                    (sesion) => (
                        <div key={sesion.id}>
                            <h2>Pelicula: {sesion.pelicula.titulo}</h2>
                            <h2>Hora: {sesion.hora}</h2>
                            <h2>Sala: {sesion.sala.nombre}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/entradas/":
                return objetosJSON.map(
                    (entrada) => (
                        <div key={entrada.id}>
                            <h2>Usuario: {entrada.usuario.username}</h2>
                            <h2>Sesion: {entrada.sesion.pelicula.titulo} // {entrada.sesion.hora}</h2>
                            <h2>Sala: {entrada.sesion.sala.nombre}</h2>
                            <h2>Sillon: Fila {entrada.sillon.fila}, Columna {entrada.sillon.columna}</h2>
                            <h2>Tipo de entrada: {entrada.tipo_entrada.nombre}</h2>
                            <h2>Precio pagado: {entrada.tipo_entrada.precio}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/salas/":
                return objetosJSON.map(
                    (sala) => (
                        <div key={sala.id}>
                            <h2>Nombre: {sala.nombre}</h2>
                            <h2>Aforo: {sala.aforo}</h2>
                            <h2>Sillones: {sala.sillones.length}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/reserva/api/sillones/":
                return objetosJSON.map(
                    (sillon) => (
                        <div key={sillon.id}>
                            <h2>Fila: {sillon.fila}</h2>
                            <h2>Columna: {sillon.columna}</h2>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/comidas/":
                return objetosJSON.map(
                    (comida) => (
                        <div key={comida.id}>
                            <h2>Nombre: {comida.nombre}</h2>
                            <h2>Descripción: {comida.descripcion}</h2>
                            <h2>Precio: {comida.precio}</h2>
                            <img src={comida.foto}></img>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/bebidas/":
                return objetosJSON.map(
                    (bebida) => (
                        <div key={bebida.id}>
                            <h2>Nombre: {bebida.nombre}</h2>
                            <h2>Descripción: {bebida.descripcion}</h2>
                            <h2>Precio: {bebida.precio}</h2>
                            <img src={bebida.foto}></img>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/menus/":
                return objetosJSON.map(
                    (menu) => (
                        <div key={menu.id}>
                            <h2>Nombre: {menu.nombre}</h2>
                            <h2>Comida: {menu.comida.nombre}</h2>
                            <h2>Bebida: {menu.bebida.nombre}</h2>
                            <h2>Descripción: {menu.descripcion}</h2>
                            <h2>Precio: {menu.precio}</h2>
                            <img src={menu.foto}></img>
                        </div>

                    )
                )

            case "http://localhost:8000/compra/api/tiposentrada/":
                return objetosJSON.map(
                    (tipoEntrada) => (
                        <div key={tipoEntrada.id}>
                            <h2>Nombre: {tipoEntrada.nombre}</h2>
                            <h2>Descripción: {tipoEntrada.descripcion}</h2>
                            <h2>Precio: {tipoEntrada.precio}</h2>
                            <img src={tipoEntrada.foto}></img>
                        </div>

                    )
                )

            default:
                return "No hay datos todavia, elija una de las opciones del selector."
                break
        }

    }




    return (

        <div className="listadoApi">

            <select onInput={loadData}>

                <option value=" ">
                    Elija una opcion
                </option>

                <option value="http://localhost:8000/autenticacion/api/usuarios/">
                    Usuarios
                </option>

                <option value="http://localhost:8000/cartelera/api/peliculas/">
                    Peliculas
                </option>

                <option value="http://localhost:8000/reserva/api/sesiones/">
                    Sesiones
                </option>

                <option value="http://localhost:8000/reserva/api/entradas/">
                    Entradas
                </option>

                <option value="http://localhost:8000/reserva/api/salas/">
                    Salas
                </option>

                <option value="http://localhost:8000/reserva/api/sillones/">
                    Sillones
                </option>

                <option value="http://localhost:8000/compra/api/comidas/">
                    Comidas
                </option>

                <option value="http://localhost:8000/compra/api/bebidas/">
                    Bebidas
                </option>

                <option value="http://localhost:8000/compra/api/menus/">
                    Menus
                </option>

                <option value="http://localhost:8000/compra/api/tiposentrada/">
                    Tipos de entrada
                </option>

            </select>

            <h1 className='titulo'>{tipoDato}</h1>

            <div className='lista'>
                {createList()}
            </div>
        </div>

    )
}