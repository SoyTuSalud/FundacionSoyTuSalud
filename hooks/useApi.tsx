import {Paciente} from "@paciente/domain/entity/paciente.entity";
import {soyTuApi} from "@/services/auth";
import {useQuery} from "@tanstack/react-query";
import {AuthDTO} from "@auth/domain/dtos/auth.dto";
import {UserDTO} from "@auth/domain/dtos/user.dto";
import {ResponseEntity} from "@common/models/response.value";

const getPacientes = async(): Promise<ResponseEntity<UserDTO[]>> => {
  const {data} = await soyTuApi.get<ResponseEntity<UserDTO[]>>("/pacientes")
  return data
}


export const useApi = () => {

  const pacientesQuery = useQuery({
    queryKey: ['pacientes'],
    queryFn: getPacientes
  })


  return {pacientesQuery}
}