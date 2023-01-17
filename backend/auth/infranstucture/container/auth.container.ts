import {authServiceImpl} from "../../application/services/auth.impl.service"
import {MongoAuthRespostory} from "../repository/mongo.repository"
import AuthController from '../controller/auth.controller';
import {AuthRoutes} from "../routes/auth.routes";


const authRepository = new MongoAuthRespostory()
const authService = new authServiceImpl(authRepository)
export const authController = new AuthController(authService)
export const authRoutes = new AuthRoutes(authController)
