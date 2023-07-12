import {IRepresentante} from '../../domain/entity/representante.entity'
import RepresentanteModel, {RepresentanteDoc} from '../model/mongo.model.representante'
import HttpError from '../../../common/models/httpError.value'
import {listModelToListEntity, modelToEntity} from '../mapper/representante.mapper'
import {RepresentanteRepository} from '../../domain/repository/representante.repository'
import {ResponseCodes} from '@common/enums/responseCodes.Enum'
import {Status} from '@common/models/status.value'
import {Types} from "mongoose";
import {logger} from "@common/logger/winston.config";

export class MongoRepository implements RepresentanteRepository {
    async findRepresentanteById(identificacion: string): Promise<IRepresentante> {
        return await RepresentanteModel.findOne({ identificacion })
            .then((data: (RepresentanteDoc & {_id: Types.ObjectId}) | null) => {
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
            logger.info(e.message)
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

    async findRepresentantes(): Promise<IRepresentante[]> {
        return await RepresentanteModel.find({})
            .then((data: RepresentanteDoc[]) => {
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
              logger.info(e.message)
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


    async createRepresentante(representante: IRepresentante): Promise<void> {
        await RepresentanteModel.create({
          identificacion: representante.identificacion,
          foto: representante.foto,
          nombreCompleto: representante.nombreCompleto,
          celular: representante.celular,
          tipoDocumento: representante.tipoDocumento,
          departamento: representante.departamento,
          municipio: representante.municipio,
          direccion: representante.direccion,
          paginaWeb: representante.paginaWeb,
          cuentaDeAhorros: representante.cuentaDeAhorros,
          distintivoHabilitacion: representante.distintivoHabilitacion,
          convalidacionIcfes: representante.convalidacionIcfes,
          fotoLogoPublicidad: representante.fotoLogoPublicidad,
          hojaVida: representante.hojaVida,
          resumenCurriculum: representante.resumenCurriculum,
          aceptaConvenio: representante.aceptaConvenio,
          aceptaTratamientoDatos: representante.aceptaTratamientoDatos,
          aceptaDocumentoSARLAFT: representante.aceptaDocumentoSARLAFT,
          aceptaCodigoEticaSoyTuSalud: representante.aceptaCodigoEticaSoyTuSalud,
          habilitado: false,
        }).catch((e) => {
          logger.info(e.message)
            throw new HttpError(
                new Status(
                    ResponseCodes.USER_EXIST.httpStatus,
                    ResponseCodes.USER_EXIST.code,
                    ResponseCodes.USER_EXIST.message,
                ),
            )
        })
    }

}
