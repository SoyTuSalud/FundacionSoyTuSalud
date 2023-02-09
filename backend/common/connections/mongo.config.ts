import {connect , connection} from 'mongoose'
import {IDbConfig} from "@common/connections/db.config";



export class MongoDbConfig implements  IDbConfig{

  connectionString = process.env.ENV_DB_CONNECT || 'mongodb://localhost:27017/SoyTuSalud?retryWrites=true&w=majority' //me traigo la variable del env

  async connectDb(): Promise<void> {
    return await connect(this.connectionString)
      .then(() => {})
      .catch((e) => {
        console.error('Error conectando a la bd', e)
      })
  }

  async disconnectedDb(): Promise<void> {
    return await connection.close()
  }

}
