import conectarBD from './configurations/mongoConfiguration'
import servicioModel from './schemas/mongoSchemaServicios'

export const crearServicio = async (args: any) => {
  await conectarBD()

  return await servicioModel
    .create({
      tipoServicio: args.tipoServicio,
      especialidad: args.especialidad,
      modalidad: args.modalidad,
      horaInicio: args.horaInicio,
      horaFin: args.horaFin,
      celularServicio: args.celularServicio,
      whatsAppServicio: args.whatsAppServicio,
      nombreResponsable: args.nombreResponsable,
      direccionServicio: args.direccionServicio,
      dias: args.dias,
      valorServicio: args.valorServicio,
      representante: args.representante,
    })
    .then((data) => {
      return data
    })
    .catch((e) => {
      console.log(e)
      return new servicioModel()
    })
}

export const serviciosTabla = async () =>{

  await conectarBD()

  return await servicioModel.find({})
  .then(data => {
    return data
  }).catch(e =>{
    console.log(e)
  })

}

export const servicio = async (id) =>{

  await conectarBD()

  return await servicioModel.findById(id)
  .then(data => {
    return data
  }).catch(e =>{
    console.log(e)
  })

}
