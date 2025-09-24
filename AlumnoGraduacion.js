class AlumnoGraduacion extends Validations {
    constructor () {
        super()
    }

    ADD_login_Validation() {
        let id = "login"
        let minSize = super.min_size(id, 3)
        let maxSize = super.max_size(id, 20)
        let format = super.format(id, /^[a-zA-Z]+$/)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        }
        else {
            let errors = []
            if (!minSize || !maxSize) errors.push("El login debe contener entre 3 a 20 carácteres")
            if (!format) errors.push("No se admiten carácteres especiales o números")
            super.show_error(id, errors)
        }
    }

    ADD_password_Validation() {
        let id = "password"
        let minSize = super.min_size(id, 3)
        let maxSize = super.max_size(id, 20)
        let format = super.format(id, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        }
        else {
            let errors = []
            if (!minSize || !maxSize) errors.push("La contraseña debe contener entre 3 a 20 carácteres")
            if (!format) errors.push("La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial de entre los siguientes: @, $, !, %, *, ?, &.")
            super.show_error(id, errors)
        }
    }

    ADD_nombre_Validation() {
        let id = "nombre"
        let minSize = super.min_size(id, 3)
        let maxSize = super.max_size(id, 20)
        let format = super.format(id, /^[a-zA-Z]+$/)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        }
        else {
            let errors = []
            if (!minSize || !maxSize) errors.push("El nombre debe contener entre 3 a 20 carácteres")
            if (!format) errors.push("No se admiten carácteres especiales o números")
            super.show_error(id, errors)
        }
    }

    ADD_submit_Validation() {
        this.ADD_login_Validation()
        this.ADD_password_Validation()
    }
}