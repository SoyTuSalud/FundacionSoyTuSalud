import { Schema, model, models } from 'mongoose'
import { User } from '../../../../domain/user/userInterface'
import { roleEnum } from '../../../../domain/user/enums/roleEnum'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'

const UserSchema = new Schema<User>({
  role: {
    type: String,
    enum: roleEnum,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  tipoDocumento: {
    type: String,
    enum: TipoDocumentoEnum,
    required: true,
  },
  celular: {
    type: String,
    validate: /^\d{10}$/,
    required: true,
  },
}, {
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
},)

UserSchema.virtual('paciente', {
  ref: 'Paciente',
  localField: '_id', //campo en el modelo representate
  foreignField: 'user', // campo en el modelo servicio
}
)
UserSchema.virtual('filantropo', {
  ref: 'Filantropo',
  localField: '_id', //campo en el modelo representate
  foreignField: 'user', // campo en el modelo servicio
}
)
UserSchema.virtual('representante', {
  ref: 'Representante',
  localField: '_id', //campo en el modelo representate
  foreignField: 'user', // campo en el modelo servicio
}
)


export default models.User || model('User', UserSchema)
