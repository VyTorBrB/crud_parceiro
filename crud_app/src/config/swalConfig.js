import Swal from 'sweetalert2'

export const SWAL_WARNING = msg => {
    Swal.fire('Atenção!', msg, "warning")
}
export const SWAL_SUCCESS = msg => {
    Swal.fire('Sucesso!', msg, "success")
}
export const SWAL_ERROR = msg => {
    Swal.fire('Erro!', msg, 'error')
}

/**
 * 
 * @param {String} msg 
 * @param {"warning"|"success"|"error"|"info"|"question"} type 
 * @param {"top-end"|"top-start"|"bottom-end"|"bottom-start"|"center"} [position] 
 */
export const SWAL_TOAST = (msg, type, position = 'top-end') => {
    Swal.fire({
        position: position,
        type: type,
        title: msg,
        showConfirmButton: false,
        timer: 1200
    })
}
export const SWAL_CONFIRM = (msg, msgInfo, cb) => {
    Swal.fire({
        title: msg,
        text: msgInfo,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
    }).then((result) => {
        if (result.value) {
            cb()
        }
    })
}