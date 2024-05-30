export function validarUsername(username) {
    const regex = /^[A-Za-z]{3,50}/

    if (!regex.test(username)) {

        return false
    } else {

        return true
    }
}

export function validarNombre(nombre) {
    const regex = /^[A-Za-z]{3,50}/

    if (!regex.test(nombre)) {

        return false
    } else {

        return true
    }
}


export function validarApellidos(apellidos) {
    const regex = /^[A-Za-z]{3,50}/

    if (!regex.test(apellidos)) {

        return false
    } else {

        return true
    }
}


export function validarPassword(password) {

    const regex = /[A-Za-z0-9]{5,}/

    if (!regex.test(password)) {

        return false
    } else {

        return true
    }
}

export function validarEmail(email) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regex.test(email)) {

        return false
    } else {

        return true
    }

}