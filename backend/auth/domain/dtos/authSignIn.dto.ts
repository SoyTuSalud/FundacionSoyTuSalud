import {roleEnum} from "../../../common/enums/role.enum"


export class AuthSignInDTO {
    
    constructor(public role: roleEnum, public correo: string, public contrasena: string){}
}