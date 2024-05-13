import axios from "axios";

const bebidasURL = "http://localhost:8000/compra/api/bebidas/"

export const obtenerBebidas = () => {
    return axios.get(bebidasURL)
}