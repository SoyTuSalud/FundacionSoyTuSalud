import {Auth} from '../../domain/entity/auth.entinty';
import AuthValue from '../../domain/model/auth.model';
import {AuthDoc} from "../model/auth.mongo.model";
import {Types} from "mongoose";


export const modelToEntity = (auth:  (AuthDoc & {_id: Types.ObjectId}) ): Auth => {
  return new AuthValue(
    auth.role,
    auth.correo,
    auth.contrasena,
    auth.statusAccount,
  )
}
