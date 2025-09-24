document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "complete") {
        let alumnoGrad = new AlumnoGraduacion()
        let login = document.getElementById("login")
        if (login) {
            login.addEventListener("change", alumnoGrad.ADD_login_Validation)
            login.addEventListener("focus", )
        }
    }    
})