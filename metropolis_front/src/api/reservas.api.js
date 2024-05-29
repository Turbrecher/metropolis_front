import axios from "axios";

const sesionesURL = "http://127.0.0.1:8000/reserva/api/sesiones/"

export const obtenerSesion = (id) => {
    return axios.get((sesionesURL + id))
}