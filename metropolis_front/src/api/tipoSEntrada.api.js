import axios from "axios";

const entradasURL = "http://localhost:8000/compra/api/tiposentrada/"

export const obtenerEntradas = () => {
    return axios.get(entradasURL)
}