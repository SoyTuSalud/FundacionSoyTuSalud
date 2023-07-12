import {Types} from "mongoose";

import {ResponseCodes} from "@common/enums/responseCodes.Enum";
import HttpError from "@common/models/httpError.value";
import {Status} from "@common/models/status.value";
import {logger} from "@common/logger/winston.config";

import {AuthSignInDTO} from "@auth/domain/dtos/authSignIn.dto";
import {Auth} from "@auth/domain/entity/auth.entinty";
import {StatusAccountEnum} from "@auth/domain/enums/statusAccount.enum";
import { roleEnum } from "@auth/domain/enums/role.enum";
import {AuthRepository} from "@auth/domain/repository/auth.repository";

import {modelToEntity} from "@auth/infranstucture/mapper/auth.mapper";
import AuthModelMongo, {AuthDoc} from '@auth/infranstucture/model/auth.mongo.model'



export class MongoAuthRespostory implements AuthRepository {

  async findByEmail(correo: string): Promise<Auth> {
    return await AuthModelMongo.findOne({correo})
      .then((data: (AuthDoc & { _id: Types.ObjectId }) | null) => {
        if (data === null) {
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
        logger.info(`${e.message}`)
        throw new HttpError(
          new Status(
            ResponseCodes.USER_NO_EXIST.httpStatus,
            ResponseCodes.USER_NO_EXIST.code,
            ResponseCodes.USER_NO_EXIST.message,
          ),
        )
      })
  }

  async authLoginAdmin(correo: string): Promise<Auth> {
    return await AuthModelMongo.findOne({ correo, role: roleEnum.ADMIN })
      .then((data: (AuthDoc & { _id: Types.ObjectId }) | null) => {
        if (data === null) {
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
        logger.info(`${e.message}`)
        throw new HttpError(
          new Status(
            ResponseCodes.USER_NO_EXIST.httpStatus,
            ResponseCodes.USER_NO_EXIST.code,
            ResponseCodes.USER_NO_EXIST.message,
          ),
        )
      })
  }
    async authSignInEmail(auth: AuthSignInDTO, hash: string): Promise<void> {
      await AuthModelMongo.create({
        role: auth.role,
        correo:  auth.correo,
        contrasena: hash,
        statusAccount: StatusAccountEnum.UNVERIFIED
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
    authVerifyRoles(token: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}