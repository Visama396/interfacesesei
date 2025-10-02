class Validations extends ErrorHandling {

    constructor() {
        super()
    }

    /**
     * This function compares the value length of the given id's input to be lesser than the amount given in compare
     * @param {*} id 
     * @param {*} compare 
     */
    min_size(id, compare) {
        let value = document.getElementById(id).value

        if (value.length < compare) {
            return false
        }

        return true
    }

    max_size(id, compare) {
        let value = document.getElementById(id).value

        if (value.length > compare) {
            return false
        }

        return true
    }

    length_valida(id, compare) {
        let value = document.getElementById(id).value
        return value.length == compare
    }

    format(id, compare) {
        let value = document.getElementById(id).value
        if (value.length == 0) return true
        return compare.test(value)
    }

    titulacion_valida(id) {
        let value = document.getElementById(id).value
        const titulaciones = ["GREI", "GRIA", "MEI", "MIA", "PCEO"]
        return titulaciones.includes(value)
    }

    
}