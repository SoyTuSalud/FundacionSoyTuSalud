import { useState, FC } from 'react'
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TableContainer,
} from '@mui/material'
import { getInitials } from '../../utils/get-initials'
import { Paciente } from '@paciente/domain/entity/paciente.entity'

export const PacientesTablas:FC<{ UsuariosTabla: Paciente[] }> = ({ UsuariosTabla}) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)
  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds:string[]= []

    if (event.target.checked) {
      newSelectedCustomerIds = UsuariosTabla.map(
        (customer) => customer.identificacion,
      )
    } else {
      newSelectedCustomerIds = []
    }

    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleSelectOne = (event: any, identificacion:string) => {
    const selectedIndex = selectedCustomerIds.indexOf(identificacion)
    let newSelectedCustomerIds:string[] = []

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        identificacion,
      )
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1),
      )
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1),
      )
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1),
      )
    }

    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event: any, newPage:number) => {
    setPage(newPage)
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedCustomerIds.length === UsuariosTabla.length}
                  color="primary"
                  indeterminate={
                    selectedCustomerIds.length > 0 &&
                    selectedCustomerIds.length < UsuariosTabla.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Comunidad</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Tipo de Documento</TableCell>
              <TableCell>Correo Electronico</TableCell>
              <TableCell>Formulario Tu Historia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UsuariosTabla.slice(0, limit).map((customer) => (
              <TableRow
                hover
                key={customer.identificacion}
                selected={
                  selectedCustomerIds.indexOf(customer.identificacion) !== -1
                }
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={
                      selectedCustomerIds.indexOf(customer.identificacion) !==
                      -1
                    }
                    onChange={(event) =>
                      handleSelectOne(event, customer.identificacion)
                    }
                    value="true"
                  />
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <Avatar src={customer.foto} sx={{ mr: 2 }}>
                      {getInitials(customer.nombre)}
                    </Avatar>
                    <Typography color="textPrimary" variant="body1">
                      {customer.nombre}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{customer.apellidos}</TableCell>
                <TableCell>
                  {customer.comunidad ? customer.comunidad : 'N/A'}
                </TableCell>
                <TableCell>{customer.identificacion}</TableCell>
                <TableCell>{customer.tipoDocumento}</TableCell>
                <TableCell>{customer.correo}</TableCell>
                <TableCell>
                  {customer.formularioTuHistoria ? 'SI' : 'NO'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={UsuariosTabla.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}