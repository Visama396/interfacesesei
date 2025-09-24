class Validations {

    constructor() {

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

    format(id, compare) {
        let value = document.getElementById(id).value
        return compare.test(value)
    }
}