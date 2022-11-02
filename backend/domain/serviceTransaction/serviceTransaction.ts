import { Schema } from "mongoose";
import { StatusEnum } from '../commons/enums/statusEnum';

export interface ServicesTransaction{

    pacienteId: Schema.Types.ObjectId
    filantropoId: Schema.Types.ObjectId
    representanteId: Schema.Types.ObjectId
    servicioSolicitado: Schema.Types.ObjectId
    fechaCreacion: string
    fechaCita:string
    fechaFin: string
    precio: number
    status: StatusEnum
    nroPago: string
}