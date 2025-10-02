class AlumnoGraduacion extends Validations {
    constructor () {
        super()
    }

    ADD_login_Validation() {
        let id = "login"
        let minSize = super.min_size(id, 4)
        let maxSize = super.max_size(id, 15)
        let format = super.format(id, /^[a-zA-Z]+$/)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        }
        else {
            let errors = []
            if (!minSize || !maxSize) errors.push("El login debe contener entre 4 a 15 carácteres")
            if (!format) errors.push("No se admiten carácteres especiales o números")
            super.show_error(id, errors)
        }
    }

    ADD_password_Validation() {
        let id = "password"
        let minSize = super.min_size(id, 8)
        let maxSize = super.max_size(id, 64)
        let format = super.format(id, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        }
        else {
            let errors = []
            if (!minSize || !maxSize) errors.push("La contraseña debe contener entre 8 a 64 carácteres")
            if (!format) errors.push("La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial de entre los siguientes: @, $, !, %, *, ?, &.")
            super.show_error(id, errors)
        }
    }

    ADD_nombre_Validation() {
        let id = "nombre"
        let minSize = super.min_size(id, 2)
        let maxSize = super.max_size(id, 25)
        let format = super.format(id, /^[\p{L}\s]+$/u)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        }
        else {
            let errors = []
            if (!minSize || !maxSize) errors.push("El nombre debe contener entre 2 a 25 carácteres")
            if (!format) errors.push("No se admiten carácteres especiales o números")
            super.show_error(id, errors)
        }
    }

    ADD_apellidos_Validation() {
        let id = "apellidos"
        let minSize = super.min_size(id, 2)
        let maxSize = super.max_size(id, 35)
        let format = super.format(id, /^[\p{L}\s]+$/u)

        if (minSize && maxSize && format) {
            super.show_correct(id)
        } else {
            let errors = []
            if (!minSize || !maxSize) errors.push("Los apellidos deben contener entre 2 a 35 carácteres")
            if (!format) errors.push("No se admiten carácteres especiales o números")
            super.show_error(id, errors)
        }
    }

    ADD_titulacion_Validation() {
        let id = "titulacion"
        let valid = super.titulacion_valida(id)
        if (valid) {
            super.show_correct(id)
        }
        else {
            super.show_error(id, ["La titulación introducida no es válida. Las titulaciones válidas son: GREI, GRIA, MEI, MIA, PCEO"])
        }
    }

    ADD_dni_Validation() {
        let id = "dni"
    }

    ADD_telefono_Validation() {
        let id = "telefono"
    }

    ADD_direccion_Validation() {
        let id = "direccion"
    }

    ADD_email_Validation() {
        let id = "email"
    }

    ADD_fotoacto_Validation() {
        let id = "fotoacto"
    }

    ADD_submit_Validation() {
        this.ADD_login_Validation()
        this.ADD_password_Validation()
        this.ADD_nombre_Validation()
        this.ADD_apellidos_Validation()
        this.ADD_titulacion_Validation()
        this.ADD_dni_Validation()
        this.ADD_telefono_Validation()
        this.ADD_direccion_Validation()
        this.ADD_email_Validation()
        this.ADD_fotoacto_Validation()
    }
}