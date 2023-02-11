import { Paciente } from '@paciente/domain/entity/paciente.entity'
import { useQuery } from '@tanstack/react-query'
import { ResponseEntity } from '@common/models/response.value'
import { getPacientes, getPacientesHistoria, getPacienteInfo } from '@/src/services/pacientes.api'

interface errorResponse {
  response: {
    data: ResponseEntity<Paciente[] | null>
  }
}

export const useApiPacientes = (data: ResponseEntity<Paciente[] | null>) => {
  const pacientesQuery = useQuery<
    ResponseEntity<Paciente[] | null>,
    errorResponse
  >({
    queryKey: ['pacientes'],
    queryFn: () => getPacientes(),
    initialData: data,
  })

  const pacientesHistoriaQuery = useQuery<
    ResponseEntity<Paciente[] | null>,
    errorResponse
  >({
    queryKey: ['pacientesHistoria'],
    queryFn: () => getPacientesHistoria(),
    initialData: data,
  })

  return { pacientesQuery, pacientesHistoriaQuery }
}