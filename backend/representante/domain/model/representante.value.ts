import {GeneroEnum} from "../enum/genero.enum"
import {TipoDocumentoEnum} from "../enum/tipoDocumento.enum"
import {IRepresentante} from "../entity/representante.entity";

class RepresentanteValue implements IRepresentante {
  aceptaCodigoEticaSoyTuSalud: boolean;
  aceptaConvenio: boolean;
  aceptaDocumentoSARLAFT: boolean;
  aceptaTratamientoDatos: boolean;
  celular: string;
  convalidacionIcfes: string;
  cuentaDeAhorros: string;
  departamento: string;
  direccion: string;
  distintivoHabilitacion: string;
  foto: string;
  fotoLogoPublicidad: string;
  habilitado: boolean;
  hojaVida: string;
  identificacion: string;
  municipio: string;
  nombreCompleto: string;
  paginaWeb: string;
  resumenCurriculum: string;
  tipoDocumento: TipoDocumentoEnum;


  constructor(aceptaCodigoEticaSoyTuSalud: boolean, aceptaConvenio: boolean, aceptaDocumentoSARLAFT: boolean,
              aceptaTratamientoDatos: boolean, celular: string, convalidacionIcfes: string, cuentaDeAhorros: string,
              departamento: string, direccion: string, distintivoHabilitacion: string, foto: string, fotoLogoPublicidad: string,
              habilitado: boolean, hojaVida: string, identificacion: string, municipio: string, nombreCompleto: string,
              paginaWeb: string, resumenCurriculum: string, tipoDocumento: TipoDocumentoEnum) {

    this.aceptaCodigoEticaSoyTuSalud = aceptaCodigoEticaSoyTuSalud;
    this.aceptaConvenio = aceptaConvenio;
    this.aceptaDocumentoSARLAFT = aceptaDocumentoSARLAFT;
    this.aceptaTratamientoDatos = aceptaTratamientoDatos;
    this.celular = celular;
    this.convalidacionIcfes = convalidacionIcfes;
    this.cuentaDeAhorros = cuentaDeAhorros;
    this.departamento = departamento;
    this.direccion = direccion;
    this.distintivoHabilitacion = distintivoHabilitacion;
    this.foto = foto;
    this.fotoLogoPublicidad = fotoLogoPublicidad;
    this.habilitado = habilitado;
    this.hojaVida = hojaVida;
    this.identificacion = identificacion;
    this.municipio = municipio;
    this.nombreCompleto = nombreCompleto;
    this.paginaWeb = paginaWeb;
    this.resumenCurriculum = resumenCurriculum;
    this.tipoDocumento = tipoDocumento;
  }
}

export default RepresentanteValue
