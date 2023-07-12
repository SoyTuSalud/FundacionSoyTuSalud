import {roleEnum} from "@common/enums/role.enum"
import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum";


export class AuthSignInDTO implements  IAuthSignInDTO{
    
    constructor(public role: roleEnum,
                public correo: string,
                public contrasena: string,
                public tipoDocumento: TipoDocumentoEnum,
                public nombre: string,
                public apellidos: string,
                public celular: string,
                public identificacion: string){}
}

export interface IAuthSignInDTO {

    role: roleEnum,
    correo: string,
    contrasena: string,
    tipoDocumento: TipoDocumentoEnum,
    nombre: string,
    apellidos: string,
    celular: string,
    identificacion: string
}