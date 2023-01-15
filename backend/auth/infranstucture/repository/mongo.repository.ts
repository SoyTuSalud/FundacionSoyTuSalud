import { ResponseCodes } from "../../../common/enums/responseCodes.Enum";
import HttpError from "../../../common/models/httpError.value";
import { Status } from "../../../common/models/status.value";
import { AuthDTO } from "../../domain/dtos/auth.dto";
import { AuthSignInDTO } from "../../domain/dtos/authSignIn.dto";
import { Auth } from "../../domain/entity/auth.entinty";
import { StatusAccountEnum } from "../../domain/enums/statusAccount.enum";
import { AuthRepository } from "../../domain/repository/auth.repository";
import { modelToEntity } from "../mapper/auth.mapper";
import AuthModel from '../model/auth.mongo.model'
import { AuthDoc } from '../model/auth.mongo.model';

export class MongoAuthRespostory implements AuthRepository {
    
    async findByEmail(correo: string): Promise<Auth> {
        return await AuthModel.findOne({ correo })
        .then((data: AuthDoc) => {
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
    authLoginAdmin(authdto: AuthDTO): Promise<Auth> {
        throw new Error("Method not implemented.");
    }
    async authSignInEmail(auth: AuthSignInDTO, hash: string): Promise<void> {
      await AuthModel.create({
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