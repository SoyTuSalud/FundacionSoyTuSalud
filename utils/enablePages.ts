export const enablePages = {
  noAuth: ['/registro', '/login', '/loginAdmin'],
  ADMIN: ['/private/',],
  PACIENTE: ['/tuhistoria'],
}

export const redirect = {
  noAuth: ['/'],
  ADMIN: ['/private/admin'],
  PACIENTE: ['/'],
}
