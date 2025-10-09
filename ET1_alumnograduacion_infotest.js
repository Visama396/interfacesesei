const alumnograduacion_def_tests = [
    // --- LOGIN ---
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 1,
        descripcion: 'Comprobar longitud mínima de login',
        accion: 'ADD',
        resultado_esperado: 'LOGIN_MIN_SIZE_KO',
        respuesta: 'Error de longitud del login, debe contener al menos 4 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 2,
        descripcion: 'Comprobar longitud máxima de login',
        accion: 'ADD',
        resultado_esperado: 'LOGIN_MAX_SIZE_KO',
        respuesta: 'Error de longitud del login, puede contener como mucho 15 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 3,
        descripcion: 'Comprobar formato de login',
        accion: 'ADD',
        resultado_esperado: 'LOGIN_FORMAT_KO',
        respuesta: 'Error de formato del login, no puede contener carácteres especiales o numéricos.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 4,
        descripcion: 'Añadir login válido',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Login es correcto.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 5,
        descripcion: 'Comprobar longitud mínima de login',
        accion: 'EDIT',
        resultado_esperado: "LOGIN_MIN_SIZE_KO",
        respuesta: 'Error de longitud del login, debe contener al menos 4 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 6,
        descripcion: 'Comprobar longitud máxima de login',
        accion: 'EDIT',
        resultado_esperado: "LOGIN_MAX_SIZE_KO",
        respuesta: 'Error de longitud del login, puede contener como mucho 15 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 7,
        descripcion: 'Comprobar formato de login',
        accion: 'EDIT',
        resultado_esperado: "LOGIN_FORMAT_KO",
        respuesta: 'Error de formato del login, no puede contener carácteres especiales o numéricos.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 8,
        descripcion: 'Editar login válido',
        accion: 'EDIT',
        resultado_esperado: true,
        respuesta: 'Login permitido al editar.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 9,
        descripcion: 'Editar login válido (vacío)',
        accion: 'EDIT',
        resultado_esperado: true,
        respuesta: 'Login vacío permitido al editar.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 10,
        descripcion: 'Buscar por login con formato incorrecto',
        accion: 'SEARCH',
        resultado_esperado: 'LOGIN_FORMAT_KO',
        respuesta: 'Error de formato en búsqueda, login con caracteres no válidos.'
    },

    // --- PASSWORD ---
    {
        entidad: 'alumnograduacion',
        campo: 'password',
        numero_definicion: 7,
        descripcion: 'Comprobar longitud mínima de password',
        accion: 'ADD',
        resultado_esperado: 'PASSWORD_MIN_SIZE_KO',
        respuesta: 'Error de longitud de la contraseña, debe contener al menos 8 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'password',
        numero_definicion: 8,
        descripcion: 'Comprobar longitud máxima de password',
        accion: 'ADD',
        resultado_esperado: 'PASSWORD_MAX_SIZE_KO',
        respuesta: 'Error de longitud de la contraseña, puede contener como mucho 100 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'password',
        numero_definicion: 9,
        descripcion: 'Comprobar formato incorrecto de password',
        accion: 'ADD',
        resultado_esperado: 'PASSWORD_FORMAT_KO',
        respuesta: 'Error de formato de la contraseña, solo puede contener letras y espacios sin acentos ni ñ.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'password',
        numero_definicion: 10,
        descripcion: 'Añadir password válida',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Contraseña es correcta.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'password',
        numero_definicion: 11,
        descripcion: 'Editar password vacía (válido)',
        accion: 'EDIT',
        resultado_esperado: true,
        respuesta: 'Contraseña vacía permitida en edición.'
    },

    // --- NOMBRE ---
    {
        entidad: 'alumnograduacion',
        campo: 'nombre',
        numero_definicion: 12,
        descripcion: 'Comprobar longitud mínima de nombre',
        accion: 'ADD',
        resultado_esperado: 'NOMBRE_MIN_SIZE_KO',
        respuesta: 'Error de longitud del nombre, debe contener al menos 2 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'nombre',
        numero_definicion: 13,
        descripcion: 'Comprobar longitud máxima de nombre',
        accion: 'ADD',
        resultado_esperado: 'NOMBRE_MAX_SIZE_KO',
        respuesta: 'Error de longitud del nombre, puede contener como mucho 25 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'nombre',
        numero_definicion: 14,
        descripcion: 'Comprobar formato incorrecto de nombre',
        accion: 'ADD',
        resultado_esperado: 'NOMBRE_FORMAT_KO',
        respuesta: 'Error de formato del nombre, solo puede contener letras, acentos, ñ y espacios.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'nombre',
        numero_definicion: 15,
        descripcion: 'Añadir nombre válido',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Nombre es correcto.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'nombre',
        numero_definicion: 16,
        descripcion: 'Editar nombre vacío (válido)',
        accion: 'EDIT',
        resultado_esperado: true,
        respuesta: 'Nombre vacío permitido en edición.'
    },

    // --- APELLIDOS ---
    {
        entidad: 'alumnograduacion',
        campo: 'apellidos',
        numero_definicion: 17,
        descripcion: 'Comprobar longitud mínima de apellidos',
        accion: 'ADD',
        resultado_esperado: 'APELLIDOS_MIN_SIZE_KO',
        respuesta: 'Error de longitud de apellidos, debe contener al menos 2 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'apellidos',
        numero_definicion: 18,
        descripcion: 'Comprobar longitud máxima de apellidos',
        accion: 'ADD',
        resultado_esperado: 'APELLIDOS_MAX_SIZE_KO',
        respuesta: 'Error de longitud de apellidos, puede contener como mucho 35 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'apellidos',
        numero_definicion: 19,
        descripcion: 'Comprobar formato incorrecto de apellidos',
        accion: 'ADD',
        resultado_esperado: 'APELLIDOS_FORMAT_KO',
        respuesta: 'Error de formato de apellidos, solo puede contener letras, acentos, ñ y espacios.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'apellidos',
        numero_definicion: 20,
        descripcion: 'Añadir apellidos válidos',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Apellidos son correctos.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'apellidos',
        numero_definicion: 21,
        descripcion: 'Editar apellidos vacíos (válido)',
        accion: 'EDIT',
        resultado_esperado: true,
        respuesta: 'Apellidos vacíos permitidos en edición.'
    },

    // --- TITULACION ---
    {
        entidad: 'alumnograduacion',
        campo: 'titulacion',
        numero_definicion: 22,
        descripcion: 'Comprobar valor no permitido en titulación',
        accion: 'ADD',
        resultado_esperado: 'TITULACION_FORMAT_KO',
        respuesta: 'Error de titulación, debe ser uno de los valores GREI, GRIA, MEI, MIA o PCEO.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'titulacion',
        numero_definicion: 23,
        descripcion: 'Añadir titulación válida',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Titulación es correcta.'
    },

    // --- DNI ---
    {
        entidad: 'alumnograduacion',
        campo: 'dni',
        numero_definicion: 24,
        descripcion: 'Comprobar formato incorrecto de DNI/NIE',
        accion: 'ADD',
        resultado_esperado: 'DNI_FORMAT_KO',
        respuesta: 'Error de formato del DNI/NIE, no cumple el patrón ni tiene letra válida.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'dni',
        numero_definicion: 25,
        descripcion: 'Añadir DNI válido',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'DNI/NIE es correcto.'
    },

    // --- TELEFONO ---
    {
        entidad: 'alumnograduacion',
        campo: 'telefono',
        numero_definicion: 26,
        descripcion: 'Comprobar formato incorrecto de teléfono',
        accion: 'ADD',
        resultado_esperado: 'TELEFONO_FORMAT_KO',
        respuesta: 'Error de formato del teléfono, debe contener exactamente 9 dígitos numéricos.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'telefono',
        numero_definicion: 27,
        descripcion: 'Añadir teléfono válido',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Teléfono es correcto.'
    },

    // --- DIRECCION ---
    {
        entidad: 'alumnograduacion',
        campo: 'direccion',
        numero_definicion: 28,
        descripcion: 'Comprobar formato incorrecto de dirección',
        accion: 'ADD',
        resultado_esperado: 'DIRECCION_FORMAT_KO',
        respuesta: 'Error de formato de dirección, solo puede contener letras, números, acentos, ñ y espacios.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'direccion',
        numero_definicion: 29,
        descripcion: 'Añadir dirección válida',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Dirección es correcta.'
    },

    // --- EMAIL ---
    {
        entidad: 'alumnograduacion',
        campo: 'email',
        numero_definicion: 30,
        descripcion: 'Comprobar formato incorrecto de email',
        accion: 'ADD',
        resultado_esperado: 'EMAIL_FORMAT_KO',
        respuesta: 'Error de formato del email, no cumple el patrón usuario@dominio.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'email',
        numero_definicion: 31,
        descripcion: 'Añadir email válido',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Email es correcto.'
    },

    // --- FOTOACTO ---
    {
        entidad: 'alumnograduacion',
        campo: 'fotoacto',
        numero_definicion: 32,
        descripcion: 'Comprobar longitud mínima de nombre de foto',
        accion: 'ADD',
        resultado_esperado: 'FOTOACTO_MIN_SIZE_KO',
        respuesta: 'Error de longitud de la foto, debe contener al menos 7 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'fotoacto',
        numero_definicion: 33,
        descripcion: 'Comprobar longitud máxima de nombre de foto',
        accion: 'ADD',
        resultado_esperado: 'FOTOACTO_MAX_SIZE_KO',
        respuesta: 'Error de longitud de la foto, puede contener como mucho 100 carácteres.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'fotoacto',
        numero_definicion: 34,
        descripcion: 'Comprobar formato incorrecto de nombre de foto',
        accion: 'ADD',
        resultado_esperado: 'FOTOACTO_FORMAT_KO',
        respuesta: 'Error de formato de la foto, solo puede contener letras y punto, sin acentos ni ñ ni espacios.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'fotoacto',
        numero_definicion: 35,
        descripcion: 'Comprobar extensión incorrecta de foto',
        accion: 'ADD',
        resultado_esperado: 'FOTOACTO_EXTENSION_KO',
        respuesta: 'Error de extensión de la foto, debe ser un archivo .jpg.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'fotoacto',
        numero_definicion: 36,
        descripcion: 'Comprobar tamaño de archivo superior a 2MB',
        accion: 'ADD',
        resultado_esperado: 'FOTOACTO_SIZE_KO',
        respuesta: 'Error de tamaño de archivo, la foto no puede superar los 2MB.'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'fotoacto',
        numero_definicion: 37,
        descripcion: 'Añadir foto válida',
        accion: 'ADD',
        resultado_esperado: true,
        respuesta: 'Foto es correcta.'
    }
];

const alumnograduacion_tests_fields = [
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 1,
        numero_prueba: 1,
        accion: 'ADD',
        valor: 'vis',
        codigo: 'LOGIN_MIN_SIZE_KO'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 2,
        numero_prueba: 1,
        accion: 'ADD',
        valor: 'visamitapeballito',
        codigo: 'LOGIN_MAX_SIZE_KO'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 3,
        numero_prueba: 1,
        accion: 'ADD',
        valor: '1visamita@',
        codigo: 'LOGIN_FORMAT_KO'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 4,
        numero_prueba: 1,
        accion: 'ADD',
        valor: 'visama',
        codigo: true
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 5,
        numero_prueba: 1,
        accion: 'EDIT',
        valor: 'vis',
        codigo: 'LOGIN_MIN_SIZE_KO'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 6,
        numero_prueba: 1,
        accion: 'EDIT',
        valor: 'visamitapeballito',
        codigo: 'LOGIN_MAX_SIZE_KO'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 7,
        numero_prueba: 1,
        accion: 'EDIT',
        valor: '1visamita@',
        codigo: 'LOGIN_FORMAT_KO'
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 8,
        numero_prueba: 1,
        accion: 'EDIT',
        valor: 'visama',
        codigo: true
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 9,
        numero_prueba: 1,
        accion: 'EDIT',
        valor: '',
        codigo: true
    },
    {
        entidad: 'alumnograduacion',
        campo: 'login',
        numero_definicion: 10,
        numero_prueba: 1,
        accion: 'SEARCH',
        valor: 'v1ct0r',
        codigo: 'LOGIN_FORMAT_KO'
    },
]

const alumnograduacion_tests_files = [
    {
        entidad: 'alumnograduacion',
        campo: '',
        numero_definicion: 1,
        numero_prueba: 1,
        accion: '',
        parametro: '',
        valor: [],
        codigo: ''
    }
]