import jwt from 'jsonwebtoken'
import conectarBD from "../adapters/mongo/configurations/mongoConfiguration";
import {NextApiRequest, NextApiResponse} from "next";
import {AuthenticationError} from "apollo-server-micro";

export const validateToken = async (req: NextApiRequest, res: NextApiResponse) => {
  await conectarBD()
  const authorization = req.cookies.token || ''

  if (!authorization) {
    return res
  }

  try {
    return jwt.verify(authorization, process.env.ENV_KEY_TOKEN!, {
      complete: true,
    })

  } catch (error: any) {
    throw new AuthenticationError('Error de auntenticación', error)
  }
}
