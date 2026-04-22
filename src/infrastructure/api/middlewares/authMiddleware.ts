import { NextFunction, Response, Request } from 'express'
import { AuthAppUseCase } from '../../../application/use-cases/authAppValidation/AuthAppUseCase.js'
import { JwtValidateAppToken } from '../security/JwtValidateAppToken.js'

const jwtValidateAppToken = new JwtValidateAppToken()
const validationAppTokenUseCase  = new AuthAppUseCase(jwtValidateAppToken)

export function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]
  const result = validationAppTokenUseCase.validateToken(token)
  if (!result.isSuccess) { 
    return res.status(result.code).json(result)
  }
  return next()
}