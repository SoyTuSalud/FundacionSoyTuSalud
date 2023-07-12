export class Status {
  httpStatus: number
  code: string
  description: string

  constructor(httpStatus: number, code: string, description: string) {
    this.httpStatus = httpStatus
    this.code = code
    this.description = description
  }
}
