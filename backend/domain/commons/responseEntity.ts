import { Status } from "./StatusInterface"

export class ResponseEntity<T>{

    body: T
    status: Status

    constructor(body: T, status: Status){
        this.body = body
        this.status = status
    }

} 