import { NextApiResponse, NextApiRequest } from 'next'
import { decodeToken } from '../../../utils/decodeToken'
import PacienteSchema from '../../../backend/infrastructure/adapters/mongo/schemas/mongoSchemaPaciente'

export default async function handler(req, res) {
  const { token } = req.query

  const data = decodeToken(token)

  if (!data) {
    return res.json({
      msg: 'Error al obtener la data',
    })
  }

  console.log('data - token: ', data)

  const paciente = await PacienteSchema.findOne({ email: data.correo })

  if (!paciente) {
    return res.json({
      msg: 'Error al obtener la data',
    })
  }

  paciente.statusAccount = 'verified'
  await paciente.save()

  return res.redirect('/verifiedAccount/ok')
}
