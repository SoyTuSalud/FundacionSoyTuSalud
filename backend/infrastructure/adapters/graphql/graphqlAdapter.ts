import { typesPaciente } from './types/typesPaciente'
import { typesFilantropo } from './types/typesFilantropo'
import { typesRepresentate } from './types/typesRepresentante'
import { typesServicios } from './types/typesServicios'
import { typesServiciosCodes } from './types/typesServiciosCodes'
import { typesEnums } from './types/typesEnum'
import { resolversFilantropos } from './resolvers/resolversFilantropo'
import { resolversPaciente } from './resolvers/resolversPaciente'
import { resolversRepresentante } from './resolvers/resolversRepresentante'
import { resolversServicios } from './resolvers/resolversServicios'
import { resolversServiciosCodes } from './resolvers/resolversServicesCodes'
import { typesUser } from './types/typesUser';
import { resolversUser } from './resolvers/resolversUser';

export const resolvers = [
  resolversPaciente, 
  resolversUser,
  resolversServicios,
  resolversServiciosCodes, 
  resolversRepresentante, 
  resolversFilantropos]

export const typeDefs = [
  typesUser,
  typesServicios,
  typesPaciente,
  typesServiciosCodes,
  typesRepresentate,
  typesFilantropo,
  typesEnums,
]
