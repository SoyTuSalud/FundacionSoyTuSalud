export const enablePages = {
  noAuth: ["/registro", "/login", "/login-admin"],
  ADMIN: ["/private/"],
  PACIENTE: ["/tuhistoria"],
};

export const redirect = {
  noAuth: ["/"],
  ADMIN: ["/private/admin"],
  PACIENTE: ["/"],
};
