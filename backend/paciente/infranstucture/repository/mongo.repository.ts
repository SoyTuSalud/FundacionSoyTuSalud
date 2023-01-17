import {Paciente} from '../../domain/entity/paciente.entity'
import PacienteModel, {PacienteDoc} from '../model/mongo.model.paciente'
import HttpError from '../../../common/models/httpError.value'
import {listModelToListEntity, modelToEntity} from '../mapper/paciente.mapper'
import {PacienteRepository} from '../../domain/repository/paciente.repository'
import {ResponseCodes} from '../../../common/enums/responseCodes.Enum'
import {UpdatePacienteDTO} from '../../domain/dtos/updatePaciente.dto'
import {Status} from '../../../common/models/status.value'

export class MongoRepository implements PacienteRepository {
    async findPacienteById(_id: string): Promise<Paciente> {
        return await PacienteModel.findOne({ identificacion: _id })
            .then((data: PacienteDoc) => {
                return modelToEntity(data)
            })
            .catch((e) => {
                throw new HttpError(
                    new Status(
                        ResponseCodes.PACIENTE_NO_EXIST.httpStatus,
                        ResponseCodes.PACIENTE_NO_EXIST.code,
                        ResponseCodes.PACIENTE_NO_EXIST.message,
                    ),
                )
            })
    }

    async findPacientes(): Promise<Paciente[]> {
        return await PacienteModel.find({})
            .then((data: PacienteDoc[]) => {
                if (data.length === 0) {
                    throw new HttpError(
                        new Status(
                            ResponseCodes.NO_DATA.httpStatus,
                            ResponseCodes.NO_DATA.code,
                            ResponseCodes.NO_DATA.message,
                        ),
                    )
                }
                return listModelToListEntity(data)
            })
            .catch((e) => {
                throw new HttpError(
                    new Status(
                        ResponseCodes.DB_ERROR_CONNECTION.httpStatus,
                        ResponseCodes.DB_ERROR_CONNECTION.code,
                        ResponseCodes.DB_ERROR_CONNECTION.message,
                    ),
                )
            })
    }

    async findPacientesTuHistoria(): Promise<Paciente[]> {
        return await PacienteModel.find({ formularioTuHistoria: true })
            .then((data: PacienteDoc[]) => {
                if (data.length === 0) {
                    throw new HttpError(
                        new Status(
                            ResponseCodes.NO_DATA.httpStatus,
                            ResponseCodes.NO_DATA.code,
                            ResponseCodes.NO_DATA.message,
                        ),
                    )
                }
                return listModelToListEntity(data)
            })
            .catch((e) => {
                throw new HttpError(
                    new Status(
                        ResponseCodes.DB_ERROR_CONNECTION.httpStatus,
                        ResponseCodes.DB_ERROR_CONNECTION.code,
                        ResponseCodes.DB_ERROR_CONNECTION.message,
                    ),
                )
            })
    }

    async createPaciente(paciente: Paciente): Promise<void> {
        await PacienteModel.create({
            identificacion: paciente.identificacion,
            nombre: paciente.nombre,
            apellidos: paciente.apellidos,
            tipoDocumento: paciente.tipoDocumento,
            celular: paciente.celular,
            correo: paciente.correo,
        }).catch((e) => {
            throw new HttpError(
                new Status(
                    ResponseCodes.USER_EXIST.httpStatus,
                    ResponseCodes.USER_EXIST.code,
                    ResponseCodes.USER_EXIST.message,
                ),
            )
        })
    }

    async updateTuHistora(updatePaciente: UpdatePacienteDTO): Promise<void> {
        await PacienteModel.findOneAndUpdate(
            {
                identificacion: updatePaciente.identificacion,
            },
            {
                formularioTuHistoria: updatePaciente.formularioTuHistoria,
                foto: updatePaciente.foto,
                fechaNacimiento: updatePaciente.fechaNacimiento,
                direccion: updatePaciente.direccion,
                municipio: updatePaciente.municipio,
                departamento: updatePaciente.departamento,
                EPS: updatePaciente.EPS,
                tuHistoria: updatePaciente.tuHistoria,
                serviciosSolicitado: updatePaciente.serviciosSolicitado,
                historiaClinica: updatePaciente.historiaClinica,
                sisben: updatePaciente.sisben,
                autorizacionFoto: updatePaciente.autorizacionFoto,
                recopilacionDatos: updatePaciente.recopilacionDatos,
                fechaSolicitud: updatePaciente.fechaSolicitud,
            },
        ).catch((e) => {
            throw new HttpError(
                new Status(
                    ResponseCodes.PACIENTE_NO_EXIST.httpStatus,
                    ResponseCodes.PACIENTE_NO_EXIST.code,
                    ResponseCodes.PACIENTE_NO_EXIST.message,
                ),
            )
        })
    }
}
