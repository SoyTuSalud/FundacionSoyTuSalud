import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum";

import {Filantropo} from "@filantropo/domain/entity/filantropo.entity";
import {ProfileTypeEnum} from "@filantropo/domain/enum/profileTypeEnum";

class FilantropoValue implements Filantropo {
  apellidos: string;
  celular: string;
  correo: string;
  identificacion: string;
  nombre: string;
  numeroDonaciones: number;
  pacientesApoyados: string[];
  profileType: ProfileTypeEnum;
  tipoDocumento: TipoDocumentoEnum;
  totalDonado: number;


  constructor(apellidos: string, celular: string, correo: string, identificacion: string,
              nombre: string, numeroDonaciones: number, pacientesApoyados: string[], profileType: ProfileTypeEnum,
              tipoDocumento: TipoDocumentoEnum, totalDonado: number) {

    this.apellidos = apellidos;
    this.celular = celular;
    this.correo = correo;
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
