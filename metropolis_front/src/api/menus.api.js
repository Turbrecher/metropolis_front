import axios from "axios";

const menusURL = "http://localhost:8000/compra/api/menus/"

export const obtenerMenus = () => {
    return axios.get(menusURL)
}