import { typesUsuario } from './types/typesUser'
import { typesFilantropo } from './types/typesFilantropo'
import { typesRepresentate } from './types/typesRepresentante'
import { typesServicios } from './types/typesServicios'
import { typesServiciosCodes } from './types/typesServiciosCodes'
import { typesEnums } from './types/typesEnum'
import { resolversFilantropos } from './resolvers/resolversFilantropo'
import { resolversUsuario } from './resolvers/resolversUser'
import { resolversRepresentante } from './resolvers/resolversRepresentante'
import { resolversServicios } from './resolvers/resolversServicios'
import { resolversServiciosCodes } from './resolvers/resolversServicesCodes'

export const resolvers = [resolversUsuario, 
  resolversServiciosCodes, 
  resolversRepresentante, 
  resolversServicios,
  resolversFilantropos]

export const typeDefs = [
  typesUsuario,
  typesServiciosCodes,
  typesRepresentate,
  typesServicios,
  typesFilantropo,
  typesEnums,
]
