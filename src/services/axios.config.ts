import axios from 'axios'

const httpLink =
process.env.ENV_FRONT_CALL || process.env.NEXT_PUBLIC_FRONT_CALL || ''

export const soyTuApi = axios.create({
    baseURL: `${httpLink}/api/v1`,
    withCredentials: true,
    })