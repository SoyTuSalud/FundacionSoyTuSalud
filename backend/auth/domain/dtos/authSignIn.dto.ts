import {roleEnum} from "@common/enums/role.enum"
import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum";


export class AuthSignInDTO {
    
    constructor(public role: roleEnum,
                public correo: string,
                public contrasena: string,
                public tipoDocumento: TipoDocumentoEnum,
                public nombre: string,
                public apellidos: string,
                public celular: string,
                public identificacion: string){}
}