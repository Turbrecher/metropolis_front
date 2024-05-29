import axios from "axios";

const peliculasURL = "http://127.0.0.1:8000/cartelera/api/peliculas/"
const sesionesPeliculaURL = "http://127.0.0.1:8000/reserva/api/sesiones/?id_pelicula="

export const obtenerPeliculas = (id) => {
    return axios.get((peliculasURL + id))
}

export const obtenerSesionesPeliculas = (id) => {
    return axios.get((sesionesPeliculaURL)+id)
}