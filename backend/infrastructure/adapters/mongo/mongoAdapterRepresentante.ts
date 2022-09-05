import conectarBD from './configurations/mongoConfiguration'
import representanteModel from './schemas/mongoSchemaRepresentante'

export const serviciosTabla = async () => {
  await conectarBD()
  return await representanteModel.find({})
  .populate("servicios")
  .then((data) => {
    return data
  }).catch(e =>{
    return new representanteModel()
  })
}

export const servicio = async (id: String) =>{
    await conectarBD()

    return await representanteModel.findById(id)
    .then(data => {
        return data
    }).catch(e =>{
        return new representanteModel()
    })
}

export const crearRepresentante = async (args: any) =>{



    return await representanteModel.create({
      identificacion: args.identificacion,
      foto: args.foto,
      nombreCompleto: args.nombreCompleto,
      tipoDocumento: args.tipoDocumento,
      celular: args.celular,
      departamento: args.departamento,
      municipio: args.municipio,
      direccion: args.direccion,
      paginaWeb: args.parinaWeb,
      cuentaDeAhorros:args.cuentaDeAhorros, 
      distintivoHabilitacion:args.distintivoHabilitacion, 
      convalidacionIcfes:args.convalidacionIcfes,       
      fotoLogoPublicidad:args.fotoLogoPublicidad, 
      hojaVida:args.hojaVida, 
      resumenCurriculum:args.resumenCurriculum, 
      aceptaConvenio:args.aceptaConvenio, 
      aceptaTratamientoDatos:args.aceptaTratamientoDatos, 
      aceptaDocumentoSARLAFT:args.aceptaDocumentoSARLAFT, 
      aceptaCodigoEticaSoyTuSalud:args.aceptaCodigoEticaSoyTuSalud, 
    })
    .then(data =>{
        return data
    }).catch(e =>{
        return new representanteModel()
    })

}
