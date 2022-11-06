import { roleEnum } from '../user/enums/roleEnum';
export interface registroData {
    nombre: string
    apellidos: string
    correo: string
    constrasena : string
    rol: roleEnum
}
   