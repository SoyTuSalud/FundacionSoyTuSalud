import { Schema, model, models } from 'mongoose'
import { Servicios } from '../../../../domain/servicios/serviciosInterface'

const ServiciosSchema = new Schema<Servicios>(
  {
    tipoServicio: {
      type: String,
      required: true,
    },
    especialidad: {
      type: String,
      required: true,
    },
    modalidad: {
      type: String,
      required: true,
    },
    horaInicio: {
      type: String,
      validate: /^\d/,
      required: true,
    },
    horaFin: {
      type: String,
      validate: /^\d/,
      required: true,
    },
    celularServicio: {
      type: String,
      validate: /^\d{10}$/,
    },
    whatsAppServicio: {
      type: String,
      validate: /^\d{10}$/,
    },
    nombreResponsable: {
      type: String,
      required: true,
    },
    direccionServicio: {
      type: String,
      required: true,
    },
    dias: {
      type: [String],
      required: true,
    },
    valorServicio: {
      type: String,
      required: true,
    },
    representante: {
      type: Schema.Types.ObjectId,
      ref: 'Representante',
      required: true,
    },
    habilitado: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  },
  
)



export default models.Servicios || model('Servicios', ServiciosSchema)
