import {Auth} from '@auth/domain/entity/auth.entinty';
import AuthValue from '@auth/domain/model/auth.model';
import {AuthDoc} from "@auth/infranstucture/model/auth.mongo.model";
import {Types} from "mongoose";


export const modelToEntity = (auth:  (AuthDoc & {_id: Types.ObjectId}) ): Auth => {
  return new AuthValue(
    auth.role,
    auth.correo,
    auth.contrasena,
    auth.statusAccount,
  )
}
