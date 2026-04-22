import { Router } from 'express'
import { AuthAppUseCase } from '../../../application/use-cases/authAppValidation/AuthAppUseCase.js'
import { JwtValidateAppToken } from '../../api/security/JwtValidateAppToken.js'
import { AuthController } from '../../api/controllers/AuthController.js'

export const authRoutes = () => {
  const router = Router()

  const jwtValidateAppToken = new JwtValidateAppToken()
  const validationAppTokenUseCase  = new AuthAppUseCase(jwtValidateAppToken) 
  const authController = new AuthController(validationAppTokenUseCase)

  router.post('/sign', authController.Sign.bind(authController))
  return router
}