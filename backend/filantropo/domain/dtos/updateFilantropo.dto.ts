
import {TipoDocumentoEnum} from "../enum/tipoDocumento.enum";
import {ProfileTypeEnum} from "../enum/profileTypeEnum";

export class CreateFilantropoDTO {

  apellidos: string;
  celular: string;
  correo: string;
  direccion: string;
  identificacion: string;
  nombre: string;
  profileType: ProfileTypeEnum;
  tipoDocumento: TipoDocumentoEnum;

  constructor(apellidos: string, celular: string, correo: string, direccion: string,
              identificacion: string, nombre: string, profileType: ProfileTypeEnum,
              tipoDocumento: TipoDocumentoEnum) {
    this.apellidos = apellidos;
    this.celular = celular;
    this.correo = correo;
    this.direccion = direccion;
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.profileType = profileType;
    this.tipoDocumento = tipoDocumento;
  }
}
