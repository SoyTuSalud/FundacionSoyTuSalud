import {connect} from 'mongoose'

const connectionString = process.env.ENV_DB_CONNECT || 'hola' //me traigo la variable del env

const conectarBD = async () => {
  return await connect(connectionString)
    .then(() => {})
    .catch((e) => {
      console.error('Error conectando a la bd', e)
    })
}

export default conectarBD
