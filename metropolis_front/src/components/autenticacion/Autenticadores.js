export function validarUsername(username) {
    const regex = /(^[A-Za-z]{3,50}$)|(^[A-Za-z]{3,50}[0-9]{1,5}$)/

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
    const regex = /(^[A-Za-z]{3,50}$)|^[A-Za-z]{3,50}[ ]{1}[A-Za-z]{3,50}$/

    if (!regex.test(apellidos)) {

        return false
    } else {

        return true
    }
}


export function validarPassword(password) {

    const regex = /^[A-Za-z0-9?_]{5,25}$/

    if (!regex.test(password)) {

        return false
    } else {

        return true
    }
}



export function validarPasswordPerfil(password) {

    const regex = /^[A-Za-z0-9?_]{5,25}$/

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
    const regex = /^[0-9]{16}$/
    if (!regex.test(numero)) {

        return false
    } else {

        return true
    }

}

export function validarCodigoTarjeta(codigo) {
    const regex = /^[0-9]{3}$/
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

    if (foto === null || foto === undefined){
        return false
    }

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

export function validarHora(hora){
    const regex = /^[0-9]{2}:[0-9]{2}/

    if (!regex.test(hora)) {

        return false
    } else {

        return true
    }
}

export function validarDuracion(duracion){
    const regex = /^[0-9]{1,3}$/

    if (!regex.test(duracion)) {

        return false
    } else {

        return true
    }
}

export function validarPegi(pegi){
    const regex = /((^\+[0-9]{1,2}$)|^todos los publicos$)/

    if (!regex.test(pegi)) {

        return false
    } else {

        return true
    }
}

export function validarFilaColumna(fila_columna){
    const regex = /(^[0-9]{1,2}$)/

    if (!regex.test(fila_columna)) {

        return false
    } else {

        return true
    }
}

export function validarAforo(aforo){
    const regex = /(^[0-9]{2,3}$)/

    if (!regex.test(aforo)) {

        return false
    } else {

        return true
    }
}