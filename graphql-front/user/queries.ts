import { gql } from '@apollo/client'

export const usuariosTablas = gql`
    query Query {
        PacientesTabla {
            identificacion
            nombre
            apellidos
            correo
            tipoDocumento
            formularioTuHistoria
            foto
        }
    }
`

export const pacientesTablaTuHistoria = gql`
    query UsuariosTabla {
        PacientesTabla {
            ... on ResponsePacienteList {
                body {
                    uid
                    nombre
                    apellidos
                    comunidad
                    fechaSolicitud
                    grupoPoblacional
                    foto
                }
                status {
                    code
                    description
                }
            }
            ... on ResponsePacienteError {
                status {
                    code
                    description
                }
            }
        }
    }
`

export const authUser = gql`
    query Query($uid: String!) {
        Paciente(uid: $uid) {
            ... on ResponsePaciente {
                body {
                    identificacion
                    _id
                    uid
                    nombre
                    apellidos
                    tipoDocumento
                    celular
                    correo
                    formularioTuHistoria
                }
                status {
                    code
                    description
                }
            }
            ... on ResponsePacienteError {
                status {
                    code
                    description
                }
            }
        }
    }
`

export const userData = gql`
    query Usuario($uid: String!) {
        Paciente(uid: $uid) {
            uid
            identificacion
            nombre
            apellidos
            tipoDocumento
            foto
            celular
            correo
            formularioTuHistoria
            aplicaEnFundacion
            matchService
            genero
            fechaNacimiento
            direccion
            discapacitado
            tipoDiscapacidad
            victimaViolencia
            identidadGenero
            grupoPoblacional
            orientacionSexual
            municipio
            departamento
            EPS
            tuHistoria
            serviciosSolicitado
            historiaClinica
            sisben
            autorizacionFoto
            recopilacionDatos
            comunidad
            fechaSolicitud
        }
    }
`
