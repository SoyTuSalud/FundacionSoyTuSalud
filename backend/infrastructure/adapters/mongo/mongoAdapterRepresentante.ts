import { Representante } from '../../../domain/representantes/representanteInterface'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import conectarBD from './configurations/mongoConfiguration'
import representanteModel from './schemas/mongoSchemaRepresentante'
import { Status } from '../../../domain/commons/StatusInterface'

export const representantesTabla = async () => {
  await conectarBD()
  return await representanteModel.find({})
  .populate("servicios")
  .then((data) => {
    return data
  }).catch(e =>{
    return new representanteModel()
  })
}

export const representante = async (id: String) =>{
    await conectarBD()

    return await representanteModel.findById(id).populate("servicios")
    .then((data: Representante) => {
      console.log(data)

      let status : Status = new Status("0", "exitoso")
      let response : ResponseEntity<Representante> = new ResponseEntity(data, status)

      return response

    }).catch(e =>{
      console.log(e)
        return new representanteModel()
    })
}

export const crearRepresentante = async (args: Representante) =>{

    await conectarBD()

    // let newRepresentante = new representanteModel({
    //   identificacion: args.identificacion,
    //   foto: args.foto,
    //   nombreCompleto: args.nombreCompleto,
    //   tipoDocumento: args.tipoDocumento,
    //   celular: args.celular,
    //   departamento: args.departamento,
    //   municipio: args.municipio,
    //   direccion: args.direccion,
    //   cuentaDeAhorros:args.cuentaDeAhorros, 
    //   distintivoHabilitacion:args.distintivoHabilitacion,      
    //   fotoLogoPublicidad:args.fotoLogoPublicidad, 
    //   hojaVida:args.hojaVida, 
    //   resumenCurriculum:args.resumenCurriculum, 
    //   aceptaConvenio:args.aceptaConvenio, 
    //   aceptaTratamientoDatos:args.aceptaTratamientoDatos, 
    //   aceptaDocumentoSARLAFT:args.aceptaDocumentoSARLAFT, 
    //   aceptaCodigoEticaSoyTuSalud:args.aceptaCodigoEticaSoyTuSalud, 
    // });


    let newRepresentante: Representante = {
      identificacion: args.identificacion,
      foto: args.foto,
      nombreCompleto: args.nombreCompleto,
      tipoDocumento: args.tipoDocumento,
      celular: args.celular,
      departamento: args.departamento,
      municipio: args.municipio,
      direccion: args.direccion,
      cuentaDeAhorros:args.cuentaDeAhorros, 
      distintivoHabilitacion:args.distintivoHabilitacion,   
      fotoLogoPublicidad:args.fotoLogoPublicidad, 
      hojaVida:args.hojaVida, 
      resumenCurriculum:args.resumenCurriculum, 
      aceptaConvenio:args.aceptaConvenio, 
      aceptaTratamientoDatos:args.aceptaTratamientoDatos, 
      aceptaDocumentoSARLAFT:args.aceptaDocumentoSARLAFT, 
      aceptaCodigoEticaSoyTuSalud:args.aceptaCodigoEticaSoyTuSalud, 
    }

    if(Object.keys(args).includes("paginaWeb")){
      newRepresentante.paginaWeb = args.paginaWeb
    }

    if(Object.keys(args).includes("convalidacionIcfes")){
      newRepresentante.convalidacionIcfes = args.convalidacionIcfes
    }

    return await representanteModel.create(newRepresentante)
    .then(data =>{
        return data
    }).catch(e =>{
        console.log(e)
        return new representanteModel()
    })

}
