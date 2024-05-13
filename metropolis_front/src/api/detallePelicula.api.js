import axios from "axios";

const peliculasURL = "http://127.0.0.1:8000/cartelera/api/peliculas/"

export const obtenerPeliculas = (id) => {
    return axios.get((peliculasURL + id))
}