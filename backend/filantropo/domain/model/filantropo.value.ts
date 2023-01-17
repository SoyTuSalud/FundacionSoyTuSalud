import {Filantropo} from "../entity/filantropo.entity";
import {TipoDocumentoEnum} from "../enum/tipoDocumento.enum";
import {ProfileTypeEnum} from "../enum/profileTypeEnum";



class FilantropoValue implements Filantropo {
  apellidos: string;
  celular: string;
  correo: string;
  direccion: string;
  identificacion: string;
  nombre: string;
  numeroDonaciones: number;
  pacientesApoyados: string[];
  profileType: ProfileTypeEnum;
  tipoDocumento: TipoDocumentoEnum;
  totalDonado: number;


  constructor(apellidos: string, celular: string, correo: string, direccion: string, identificacion: string,
              nombre: string, numeroDonaciones: number, pacientesApoyados: string[], profileType: ProfileTypeEnum,
              tipoDocumento: TipoDocumentoEnum, totalDonado: number) {

    this.apellidos = apellidos;
    this.celular = celular;
    this.correo = correo;
    this.direccion = direccion;
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.numeroDonaciones = numeroDonaciones;
    this.pacientesApoyados = pacientesApoyados;
    this.profileType = profileType;
    this.tipoDocumento = tipoDocumento;
    this.totalDonado = totalDonado;
  }


}

export default FilantropoValue
