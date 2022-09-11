import conectarBD from './configurations/mongoConfiguration'
import filantropoModel from './schemas/mongoSchemaFilantropo'

export const filantroposTabla = async () =>{

    await conectarBD()
  
    return await filantropoModel.find({})
    .then(data => {
      return data
    }).catch(e =>{
      console.log(e)
    })
  
}

export const filantropo = async (id: String) =>{

    await conectarBD()
  
    return await filantropoModel.findById(id)
    .then(data => {
      return data
    }).catch(e =>{
      console.log(e)
    })
  
}

export const crearFilantropo = async (args: any) =>{

    return await filantropoModel.create({
        tipoDocumento: args.tipoDocumento,
        identificacion: args.identificacion,
        nombre: args.nombre,
        celular: args.celular,
        direccion: args.direccion,
        correo: args.correo,
    })
    .then((data) => {
        return data
      })
      .catch((e) => {
        console.log(e)
        return new filantropoModel()
      })

}


