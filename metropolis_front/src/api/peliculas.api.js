import axios from "axios";

const peliculasURL = "http://localhost:8000/cartelera/api/peliculas/"

export const obtenerPeliculas = () => {
    return axios.get(peliculasURL)
}