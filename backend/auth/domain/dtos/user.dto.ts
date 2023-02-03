import { roleEnum } from '@common/enums/role.enum'

import { StatusAccountEnum } from '@auth/domain/enums/statusAccount.enum'

export class UserDTO {
  constructor(
    public role: roleEnum,
    public correo: string,
    public statusAccount?: StatusAccountEnum,
    public token?: string,
  ) {}
}
