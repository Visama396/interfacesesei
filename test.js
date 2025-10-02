document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "complete") {
        let alumnoGrad = new AlumnoGraduacion()
        let login = document.getElementById("login")
        if (login) {
            login.addEventListener("change", () => { 
                alumnoGrad.ADD_login_Validation() 
            })
        }

        let password = document.getElementById("password")
        if (password) {
            password.addEventListener("change", () => {
                alumnoGrad.ADD_password_Validation()
            })
        }

        let nombre = document.getElementById("nombre")
        if (nombre) {
            nombre.addEventListener("change", () => {
                alumnoGrad.ADD_nombre_Validation()
            })
        }

        let apellidos = document.getElementById("apellidos")
        if (apellidos) {
            apellidos.addEventListener("change", () => {
                alumnoGrad.ADD_apellidos_Validation()
            })
        }

        let titulacion = document.getElementById("titulacion")
        if (titulacion) {
            titulacion.addEventListener("change", () => {
                alumnoGrad.ADD_titulacion_Validation()
            })
        }

        let dni = document.getElementById("dni")
        if (dni) {
            dni.addEventListener("change", () => {
                alumnoGrad.ADD_dni_Validation()
            })
        }

        let telefono = document.getElementById("telefono")
        if (telefono) {
            telefono.addEventListener("change", () => {
                alumnoGrad.ADD_telefono_Validation()
            })
        }

        let direccion = document.getElementById("direccion")
        if (direccion) {
            direccion.addEventListener("change", () => {
                alumnoGrad.ADD_direccion_Validation()
            })
        }

        let email = document.getElementById("email")
        if (email) {
            email.addEventListener("change", () => {
                alumnoGrad.ADD_email_Validation()
            })
        }

        let fotoacto = document.getElementById("fotoacto")
        if (fotoacto) {
            fotoacto.addEventListener("change", () => {
                alumnoGrad.ADD_fotoacto_Validation()
            })
        }

        let form = document.getElementById("formulario")
        if (form) {
            form.addEventListener("submit", () => {
                alumnoGrad.ADD_submit_Validation()
            })
        }
    }    
})