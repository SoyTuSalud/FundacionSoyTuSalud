export class RequestEntity<T> {
  body: T
  cookies: string | undefined
  headers: object | undefined

  constructor(body: T, cookies?: string, headers?: object) {
    this.body = body
    this.cookies = cookies
    this.headers = headers
  }
}
