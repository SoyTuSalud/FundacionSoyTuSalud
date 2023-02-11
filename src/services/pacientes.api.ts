import { IncomingMessage } from "http"

import { Paciente } from "@paciente/domain/entity/paciente.entity"
import { ResponseEntity } from "@common/models/response.value"

import { soyTuApi } from "./axios.config"


export const getPacientes = async(): Promise<ResponseEntity<Paciente[] | null >> => {
    const {data} = await soyTuApi.get<ResponseEntity<Paciente[]>>("/pacientes")
    return data
}

export const getPacientesHistoria = async(): Promise<ResponseEntity<Paciente[]>> => {
    const {data} = await soyTuApi.get<ResponseEntity<Paciente[]>>("/pacientes/historia")
    return data
}

export const getPacienteInfo = async(id: string | string[] | undefined): Promise<ResponseEntity<Paciente>> => {
    const {data} = await soyTuApi.get<ResponseEntity<Paciente>>(`/pacientes/find/${id}`)
    return data
}

export const getPacientesSSR = async(req: IncomingMessage): Promise<ResponseEntity<Paciente[] | null >> => {

    try{
        const {data} = await soyTuApi.get<ResponseEntity<Paciente[]>>("/pacientes",{
            withCredentials: true,
            headers: {
                Cookie: req?.headers?.cookie
            }
        })
        return data
    }catch(e:any){
        return e.response.data
    }
        
}

export const getPacientesHistoriaSSR = async(req: IncomingMessage): Promise<ResponseEntity<Paciente[]>> => {
    try{
        const {data} = await soyTuApi.get<ResponseEntity<Paciente[]>>("/pacientes/historia",{
            withCredentials: true,
            headers: {
                Cookie: req?.headers?.cookie
            }
        })
        return data
    }catch(e:any){
        return e.response.data
    }
}

export const getPacienteSSR = async(req: IncomingMessage, id: string): Promise<ResponseEntity<Paciente>> => {
    try{
        const {data} = await soyTuApi.get<ResponseEntity<Paciente>>(`/pacientes/find/${id}`,{
            withCredentials: true,
            headers: {
                Cookie: req?.headers?.cookie
            }
        })
        return data
    }catch(e:any){
        return e.response.data
    }
}


