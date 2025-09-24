class ErrorHandling {
    constructor() {

    }

    show_error(id, errors) {
        let container = document.getElementById("div_" + id)

        let label = document.getElementById("lbl_" + id)
        label.style.color = "red"

        let input = document.getElementById(id)
        input.style.borderColor = "red"

        let errorBox = document.createElement("div")
        errorBox.id = "error_"+id
        for (let error of errors) {
            let errItem = document.createElement("p")
            errItem.innerText = error
            errItem.style.color = "red"
            errorBox.appendChild(errItem)
        }
        container.appendChild(errorBox)
    }

    show_correct(id) {
       let label = document.getElementById("lbl_" + id)
       label.style.color = "green"
       
       let input = document.getElementById(id)
       input.style.borderColor = "green"
    }

    hide_error(id) {
        let errorBox = document.getElementById("error_"+id)
        document.removeChild(errorBox)
    }
}