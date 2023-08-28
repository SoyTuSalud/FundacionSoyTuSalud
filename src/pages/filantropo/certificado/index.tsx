import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormControl fullWidth>
              <InputLabel id="person-type">Tipo de persona</InputLabel>
              <Select labelId="person-type" id="simple-select">
                <MenuItem value={1}>Natural</MenuItem>
                <MenuItem value={2}>Jurídica </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="document-type">Tipo de documento</InputLabel>
              <Select labelId="document-type" id="simple-select">
                <MenuItem value={1}>Cédula</MenuItem>
                <MenuItem value={2}>Extranjera</MenuItem>
                <MenuItem value={3}>Otro</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="document-number">
                Número de documento
              </InputLabel>
              <OutlinedInput id="document-number" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="name">Nombre</InputLabel>
              <OutlinedInput id="name" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="last-name">Apellidos</InputLabel>
              <OutlinedInput id="last-name" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="date">Fecha</InputLabel>
              <OutlinedInput id="date" />
            </FormControl>
          </div>
          <div className="flex max-md:flex-col justify-center items-center gap-6">
            <SoyTuButton className="w-64">Generar</SoyTuButton>
            <SoyTuButton variant="outlined" className="w-64">
              Cancelar
            </SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Certificado.getLayout = getLayout

export default Certificado
