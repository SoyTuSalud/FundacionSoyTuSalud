import {Filantropo} from '../../domain/entity/filantropo.entity'
import FilantropoModel, {FilantropoDoc} from '../model/mongo.model.filantropo'
import HttpError from '../../../common/models/httpError.value'
import {listModelToListEntity, modelToEntity} from '../mapper/paciente.mapper'
import {FilantropoRepository} from '../../domain/repository/filantropo.repository'
import {ResponseCodes} from '../../../common/enums/responseCodes.Enum'
import {Status} from '../../../common/models/status.value'
import {CreateFilantropoDTO} from "../../domain/dtos/updateFilantropo.dto";
import {Types} from "mongoose";

export class MongoRepository implements FilantropoRepository {

    public async findFilantropoById(identificacion: string): Promise<Filantropo> {
        return await FilantropoModel.findOne({ identificacion })
            .then((data: (FilantropoDoc & {_id: Types.ObjectId}) | null) => {
                if(data === null){
                    throw new HttpError(
                      new Status(
                        ResponseCodes.USER_NO_EXIST.httpStatus,
                        ResponseCodes.USER_NO_EXIST.code,
                        ResponseCodes.USER_NO_EXIST.message,
                      ),
                    )
                }
                return modelToEntity(data)
            })
            .catch((e) => {
                throw new HttpError(
                    new Status(
                      ResponseCodes.USER_NO_EXIST.httpStatus,
                      ResponseCodes.USER_NO_EXIST.code,
                      ResponseCodes.USER_NO_EXIST.message,
                    ),
                )
            })
    }

    public async findFilantropo(): Promise<Filantropo[]> {
        return await FilantropoModel.find({})
            .then((data: FilantropoDoc[]) => {
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


    public async createFilantropo(filantropo: CreateFilantropoDTO): Promise<void> {
        await FilantropoModel.create({
            apellidos: filantropo.apellidos,
            celular: filantropo.celular,
            correo: filantropo.correo,
            direccion: filantropo.direccion,
            identificacion: filantropo.identificacion,
            nombre: filantropo.nombre,
            numeroDonaciones: 0,
            pacientesApoyados: [],
            profileType: filantropo.profileType,
            tipoDocumento: filantropo.tipoDocumento,
            totalDonado: 0,
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

    //todo
/*
    async updateFilantropo(updatePaciente: UpdatePacienteDTO): Promise<void> {
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

 */
}
