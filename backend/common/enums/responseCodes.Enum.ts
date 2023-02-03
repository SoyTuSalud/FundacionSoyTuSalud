export const ResponseCodes = {
  SUCEESS: {
    code: 'ST_00',
    message: 'Exito en la operacion',
    httpStatus: 200,
  },
  FATA_ERROR: {
    code: 'ST_01',
    message: 'Error fatal favor contactar con el administrador',
    httpStatus: 400,
  },
  NO_DATA: {
    code: 'ST_02',
    message: 'No se encontraron datos',
    httpStatus: 404,
  },
  DB_ERROR_CONNECTION: {
    code: 'ST_03',
    message: 'Falla en conexion a base de datos',
    httpStatus: 500,
  },
  PACIENTE_NO_EXIST: {
    code: 'ST_04',
    message: 'Paciente no existe en base de datos',
    httpStatus: 400,
  },
  BAD_REQUEST: {
    code: 'ST_05',
    message: 'Request no valida',
    httpStatus: 400,
  },
  USER_EXIST: {
    code: 'ST_06',
    message: 'Usuario ya existente',
    httpStatus: 400,
  },
  UNAUTHORIZED: {
    code: 'ST_07',
    message: 'No autorizado para esta peticion',
    httpStatus: 401,
  },
  ROUTE_NOT_FOUND: {
    code: 'ST_08',
    message: 'Ruta no existente',
    httpStatus: 404,
  },
  METHOD_NOT_ALLOWED: {
    code: 'ST_09',
    message: 'Metodo no existe',
    httpStatus: 405,
  },
  LOGIN_ERROR: {
    code: 'ST_10',
    message: 'Error la iniciar sesion email o contraseña errorneo',
    httpStatus: 400,
  },
  USER_NO_EXIST: {
    code: 'ST_11',
    message: 'Usuario no existe',
    httpStatus: 400,
  },
  EXPIRED_TOKEN: {
    code: 'ST_12',
    message: 'Se ha expirado tu sesión, por favor inicia sesión nuevamente.',
    httpStatus: 401,
  },
  INTERNAL_ERROR: {
    code: 'ST_13',
    message: 'ERROR INTERNO.',
    httpStatus: 500,
  },
}
