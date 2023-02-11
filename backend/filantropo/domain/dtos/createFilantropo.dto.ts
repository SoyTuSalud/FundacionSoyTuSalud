
import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum"
import {ProfileTypeEnum} from "../enum/profileTypeEnum";

export class CreateFilantropoDTO {

  apellidos: string;
  celular: string;
  correo: string;
  identificacion: string;
  nombre: string;
  profileType: ProfileTypeEnum;
  tipoDocumento: TipoDocumentoEnum;

  constructor(apellidos: string,
              celular: string,
              correo: string,
              identificacion: string,
              nombre: string,
              profileType: ProfileTypeEnum,
              tipoDocumento: TipoDocumentoEnum) {
    this.apellidos = apellidos;
    this.celular = celular;
    this.correo = correo;
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.profileType = profileType;
    this.tipoDocumento = tipoDocumento;
  }
}
