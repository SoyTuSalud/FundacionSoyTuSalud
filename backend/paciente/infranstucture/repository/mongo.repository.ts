import {Types} from "mongoose";

import {ResponseCodes} from '@common/enums/responseCodes.Enum'
import {Status} from '@common/models/status.value'
import HttpError from '@common/models/httpError.value'

import {Paciente} from '@paciente/domain/entity/paciente.entity'
import {PacienteRepository} from '@paciente/domain/repository/paciente.repository'
import {UpdatePacienteDTO} from '@paciente/domain/dtos/updatePaciente.dto'

import PacienteModel, {PacienteDoc} from '@paciente/infranstucture/model/mongo.model.paciente'
import {listModelToListEntity, modelToEntity} from '@paciente/infranstucture/mapper/paciente.mapper'
import {logger} from "@common/logger/winston.config";
import {ResponseEntity} from "@common/models/response.value";
import {getFatalStatus} from "@common/functions/functions.common";


export class MongoRepository implements PacienteRepository {
    async findPacienteById(_id: string): Promise<Paciente> {
        return await PacienteModel.findOne({ identificacion: _id })
            .then((data :(PacienteDoc & {_id: Types.ObjectId}) | null) => {
                if(data === null){
                    throw new HttpError(
                      new Status(
                        ResponseCodes.PACIENTE_NO_EXIST.httpStatus,
                        ResponseCodes.PACIENTE_NO_EXIST.code,
                        ResponseCodes.PACIENTE_NO_EXIST.message,
                      ),
                    )
                }
                return modelToEntity(data)
            })
            .catch((e) => {
                if (e instanceof HttpError) {
                    throw e
                }
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
                if (e instanceof HttpError) {
                    throw e
                }
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
                if (e instanceof HttpError) {
                    throw e
                }
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
            // @ts-ignore
            logger.info(e.message)
            if (e instanceof HttpError) {
                throw e
            }
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
            if (e instanceof HttpError) {
                throw e
            }
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
