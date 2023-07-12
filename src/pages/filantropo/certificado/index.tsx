import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'

const Certificado = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 style={{ color: '#616AC5' }} className="font-bold text-3xl">
            Generar certificado
          </h1>
          <p>
            Ingresa los datos del donante para generar un certificado que valide
            tu contribución a nuestra fundación.
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="grid grid-cols-1 gap-5">
            <FormControl fullWidth>
              <InputLabel id="tipo-persona">Tipo de persona</InputLabel>
              <Select labelId="tipo-persona" id="simple-select">
                <MenuItem value={1}>Natural</MenuItem>
                <MenuItem value={2}>Jurídica </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="tipo-documento">Tipo de documento</InputLabel>
              <Select labelId="tipo-documento" id="simple-select">
                <MenuItem value={1}>Cédula</MenuItem>
                <MenuItem value={2}>Extranjera</MenuItem>
                <MenuItem value={3}>Otro</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="n-documento">Número de documento</InputLabel>
              <OutlinedInput id="n-documento" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="nombre">Nombre</InputLabel>
              <OutlinedInput id="nombre" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="apellidos">Apellidos</InputLabel>
              <OutlinedInput id="apellidos" />
            </FormControl>
            {
              //<DatePicker
              //label="Fecha"
              //>
            }
            <div className="flex flex-col items-center gap-5">
              <SoyTuButton className="w-1/2">Generar</SoyTuButton>
              <SoyTuButton variant="outlined" className="w-1/2">
                Cancelar
              </SoyTuButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Certificado.getLayout = getLayout

export default Certificado
