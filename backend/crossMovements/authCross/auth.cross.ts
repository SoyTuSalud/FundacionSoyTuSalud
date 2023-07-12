import {RequestEntity} from "@common/models/request.value";
import {roleEnum} from "@common/enums/role.enum";

import {Paciente} from "@paciente/domain/entity/paciente.entity";
import {pacienteService} from "@paciente/infranstucture/container/paciente.container"
import PacienteValue from "@paciente/domain/model/paciente.value";

import {filantropoService} from "@filantropo/infranstucture/container/filantropo.container";
import {CreateFilantropoDTO} from "@filantropo/domain/dtos/createFilantropo.dto";
import {ProfileTypeEnum} from "@filantropo/domain/enum/profileTypeEnum";

import {AuthSignInDTO} from "@auth/domain/dtos/authSignIn.dto";



export const nextCreation = async (request: RequestEntity<AuthSignInDTO>) => {
  if(request.body.role === roleEnum.PACIENTE){
    await createPacienteCross(prepareBodyPaciente(request))
  }
  if(request.body.role === roleEnum.FILANTROPO){
    await createFilantropoCross(prepareBodyFilantropo(request))
  }
}
const createPacienteCross = async (request: RequestEntity<Paciente>) =>{
 await pacienteService.createPaciente(request)
}

const createFilantropoCross = async (request: RequestEntity<CreateFilantropoDTO>) =>{
  await filantropoService.createFilantropo(request)
}

const prepareBodyPaciente = (request: RequestEntity<AuthSignInDTO>): RequestEntity<Paciente> => {
  const paciente = new PacienteValue(
    request.body.identificacion,
    request.body.nombre,
    request.body.apellidos,
    request.body.tipoDocumento,
    request.body.celular,
    request.body.correo
  )
  return new RequestEntity(paciente, request.cookies, request.headers)
}

const prepareBodyFilantropo = (request: RequestEntity<AuthSignInDTO>): RequestEntity<CreateFilantropoDTO> => {
  const filantropo = new CreateFilantropoDTO(
    request.body.apellidos,
    request.body.celular,
    request.body.correo,
    request.body.identificacion,
    request.body.nombre,
    ProfileTypeEnum.PUBLIC,
    request.body.tipoDocumento
  )
  return new RequestEntity(filantropo, request.cookies, request.headers)
}
