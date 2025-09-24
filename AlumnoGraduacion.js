class AlumnoGraduacion extends Validations {
    constructor () {
        super()
    }

    ADD_login_Validation() {
        console.log("ADD login")
        let errorHandler = new ErrorHandling()

        let id = "login"
        let minSize = super.min_size(id, 3)
        let maxSize = super.max_size(id, 20)
        let format = super.format(id, /\s/)

        if (minSize && maxSize && format) {
            console.log("ADD CORRECTO")
            errorHandler.show_correct(id)
        }
        else {
            console.log("ADD INCORRECTO")
            let errors = []
            if (!minSize || !maxSize) errors.push("El login tiene que ser de entre 3 a 20 carácteres")
            if (!format) errors.push("No se admiten carácteres especiales o números")
            errorHandler.show_error(id, errors)
        }
    }
}