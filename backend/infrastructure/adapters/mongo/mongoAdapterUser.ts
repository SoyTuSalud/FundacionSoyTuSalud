import conectarBD from './configurations/mongoConfiguration'
import userModel from './schemas/mongoSchemaUser'

export const findAllUsers = async () => {
  await conectarBD()
  return await userModel.find({})
}

export const findAllUsersTuHistoria = async () => {
  await conectarBD()
  return await userModel.find({
    tuHistoria: true,
  })
}

export const findUserById = async (uid: String) => {
  await conectarBD()

  return await userModel
    .findOne({
      uid
    })
    .then((data) => {
      return data 
    })
    .catch((err) => {
      return new userModel()
    })
}

export const createUser = async (args: any) => {
  await conectarBD()
  return await userModel
    .create({
      uid: args.uid,
      identificacion: args.identificacion,
      nombre: args.nombre,
      apellidos: args.apellidos,
      tipoDocumento: args.tipoDocumento,
      celular: args.celular,
      correo: args.correo,
    })
    .then((data) => {
      return data
    })
    .catch((e) => {
      console.log(e)
    })
}

export const createUserTuHistoria = async (args: any) => {
  await conectarBD()

  return await userModel
    .findByIdAndUpdate(args._id, {
      foto: args.foto,
      genero: args.genero,
      fechaNacimiento: args.fechaNacimiento,
      direccion: args.direccion,
      discapacitado: args.discapacitado,
      tipoDiscapacidad: args.tipoDiscapacidad,
      victimaViolencia: args.victimaViolencia,
      identidadGenero: args.identidadGenero,
      orientacionSexual: args.orientacionSexual,
      grupoPoblacional: args.grupoPoblacional,
      municipio: args.municipio,
      departamento: args.departamento,
      EPS: args.EPS,
      tuHistoria: args.tuHistoria,
      serviciosSolicitado: args.serviciosSolicitado,
      historiaClinica: args.historiaClinica,
      sisben: args.sisben,
      autorizacionFoto: args.autorizacionFoto,
      recopilacionDatos: args.recopilacionDatos,
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((e) => {
      console.log(e)
      return new userModel()
    })
}
