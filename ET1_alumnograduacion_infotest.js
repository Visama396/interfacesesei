const  alumnograduacion_def_tests = [
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 1,
        descripcion: 'comprobar longitud mínima',
        accion: 'ADD',
        resultado_esperado: 'LOGIN_MIN_SIZE_KO',
        respuesta: 'Error de longitud del login, debe contener al menos 4 caracteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 2,
        descripcion: 'comprobar longitud máxima',
        accion: 'ADD',
        resultado_esperado: 'LOGIN_MAX_SIZE_KO',
        respuesta: 'Error de longitud del login, puede contener como mucho 15 caracteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 3,
        descripcion: 'comprobar formato',
        accion: 'ADD',
        resultado_esperado: 'LOGIN_MAX_SIZE_KO',
        respuesta: 'Error de longitud del login, puede contener como mucho 15 caracteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 4,
        descripcion: 'login válido',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Error de longitud del login, puede contener como mucho 15 caracteres.'
    }
]

const alumnograduacion_tests_fields = [
    {
        entidad: 'alumnograduacion',
        campo: '',
        numero_definicion: 1,
        numero_prueba: 1,
        accion: '',
        valores: [],
        codigo: ''
    }
]

const alumnograduacion_tests_files = [
    {
        entidad: 'alumnograduacion',
        campo: '',
        numero_definicion: 1,
        numero_prueba: 1,
        accion: '',
        parametro: '',
        valores: [],
        codigo: ''
    }
]