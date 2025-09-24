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

        let form = document.getElementById("formulario")
        if (form) {
            form.addEventListener("submit", () => {
                alumnoGrad.ADD_submit_Validation()
            })
        }
    }    
})