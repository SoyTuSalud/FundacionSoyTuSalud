import { User } from '../../../domain/user/userInterface'
import conectarBD from './configurations/mongoConfiguration'
import userModel from './schemas/mongoSchemaUser'

export const findAllUsers = async () => {
  conectarBD()
  const response: User[] = await userModel.find({})
  return response
}

export const findAllUsersTuHistoria = async () => {
  conectarBD()
  const response: User[] = await userModel.find({
    tuHistoria: true,
  })
  return response
}

export const findUserById = async(id : String) => {
  conectarBD()
  const response: User = await userModel?.findById(id): 
  return response
}
