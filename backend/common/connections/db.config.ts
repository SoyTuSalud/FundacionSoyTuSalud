export interface IDbConfig {
  connectDb():Promise<void>

  disconnectedDb(): Promise<void>
}