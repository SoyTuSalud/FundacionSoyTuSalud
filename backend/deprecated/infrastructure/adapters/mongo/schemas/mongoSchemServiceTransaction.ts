import { Schema, model, models } from 'mongoose'
import { roleEnum } from '../../../../domain/user/enums/roleEnum'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'
import { ServicesTransaction } from '../../../../domain/serviceTransaction/serviceTransaction';
import { StatusEnum } from '../../../../domain/commons/enums/statusEnum';

const UserSchema = new Schema<ServicesTransaction>(
  {
    pacienteId:{
      type: Schema.Types.ObjectId,
      ref: "Paciente",
      required: true
    },
    filantropoId:{
        type: Schema.Types.ObjectId,
        ref: "Filantropo",
    },
    representanteId:{
        type: Schema.Types.ObjectId,
        ref: "Representante",
        required: true
    },
    servicioSolicitado: {
        type: Schema.Types.ObjectId,
        ref: "Servicios",
        required: true
    },
    fechaCreacion: {
        type: String,
        default: new Date().toISOString().split('T')[0]
    },
    fechaCita:{
        type: String,
    },
    fechaFin: {
        type: String,
    },
    precio: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: StatusEnum
    },
    nroPago: {
        type: String,
    },
  },
)


export default models.ServicesTransaction || model('ServicesTransaction', UserSchema)
