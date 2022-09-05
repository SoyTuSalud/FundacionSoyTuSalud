import conectarBD from './configurations/mongoConfiguration'
import ServiceCodes from './schemas/MongoSchemaServiceCodes'

export const codeService = async (args: any) => {
  conectarBD()
  const findService = await ServiceCodes.find({
    TIPO_DE_SERVICIO: { $regex: args.TIPO_DE_SERVICIO, $options: 'i' },
    DESCRIPCION_SERVICIO: {
      $regex: args.DESCRIPCION_SERVICIO,
      $options: 'i',
    },
  })
  return findService
}

export const crearCode = async (args: any) => {
  conectarBD()
  const newServiceCode = new ServiceCodes({
    DESCRIPCION_SERVICIO: args.DESCRIPCION_SERVICIO,
    CODIGO: args.CODIGO,
    COBERTURA: args.COBERTURA,
    TIPO_DE_SERVICIO: args.TIPO_DE_SERVICIO,
  })
  await newServiceCode
    .save()
    .then(() => {
      console.log('Servicio creado')
      return newServiceCode
    })
    .catch((e) => {
      console.log('Error al crear servicio', e)
      return new ServiceCodes()
    })
}
