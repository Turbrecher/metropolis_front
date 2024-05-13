import axios from "axios";

const comidasURL = "http://localhost:8000/compra/api/comidas/"

export const obtenerComidas = () => {
    return axios.get(comidasURL)
}