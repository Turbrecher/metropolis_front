export function validarUsername(username) {
    const regex = /^[A-Za-z]{3,50}/

    if (!regex.test(username)) {

        return false
    } else {

        return true
    }
}

export function validarNombre(nombre) {
    const regex = /[A-Za-z]{3,50}/

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


export function validarPasswordPerfil(password) {

    const regex = /[A-Za-z0-9]{5,}/

    if(password.length === 0){
        return true
    }

    if (!regex.test(password)) {

        return false
    } else {

        return true
    }
}

export function validarEmail(email) {
    const regex = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!regex.test(email)) {

        return false
    } else {

        return true
    }

}

export function validarNumeroTarjeta(numero) {
    const regex = /[0-9]{16}/
    if (!regex.test(numero)) {

        return false
    } else {

        return true
    }

}

export function validarCodigoTarjeta(codigo) {
    const regex = /[0-9]{3}/
    if (!regex.test(codigo)) {

        return false
    } else {

        return true
    }

}

export function validarFechaExpiración(fechaExpiracion){
    if (fechaExpiracion == ""){
        return false
    }else{
        return true
    }
}

export function validarDescripcion(descripcion){
    const regex = /[A-Za-z0-9]{5,250}/

    if (!regex.test(descripcion)) {

        return false
    } else {

        return true
    }
}


export function validarFoto(foto){
    const regex = /(image\/jpeg|image\/jpg|image\/png)/

    if (!regex.test(foto)) {

        return false
    } else {

        return true
    }
}

export function validarPrecio(precio){
    const regex = /(^[0-9]{1,3}$)|^([0-9]{1,3}[.]{1}[0-9]{1,2}$)/

    if (!regex.test(precio)) {

        return false
    } else {

        return true
    }
}