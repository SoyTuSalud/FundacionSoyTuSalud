import { Schema, models, model } from 'mongoose'
import { ServicesCodes } from '../../../../domain/servicesCodes/serviceCodesInterface'

const ServiceCodeSchema = new Schema<ServicesCodes>({
  DESCRIPCION_SERVICIO: {
    type: String,
    required: true
  },
  CODIGO: {
    type: String,
    required: true
  },
  COBERTURA: {
    type: String,
    required: true
  },
  TIPO_DE_SERVICIO: {
    type: String,
    required: true
  },
},
{
  versionKey: false
})

export default models.ServiceCodes || model('ServiceCodes', ServiceCodeSchema)
