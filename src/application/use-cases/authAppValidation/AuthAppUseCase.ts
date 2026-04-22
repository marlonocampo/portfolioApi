import { AuthApp } from '../../../domain/authApp/AuthApp.js'
import { Result } from '../../shared/Result.js'
export class AuthAppUseCase {
  constructor (private tokenValidator: AuthApp) { }
  private CLIENT_ID = process.env.CLIENT_ID

  sign (payload: { iss: string }) {
    if (!payload.iss) {
      return Result.fail<string>(400, 'Issuer (iss) is required', 'Issuer (iss) is required')
    }

    if (payload.iss !== this.CLIENT_ID) {
      return Result.fail<string>(403, 'Forbidden: Invalid issuer', 'Forbidden: Invalid issuer')
    }

    const result = this.tokenValidator.sign(payload)
    return Result.ok<string>(200, result)
  }

  validateToken (token: string | undefined) {
    if (!token) {
      return Result.fail<string>(401, 'Invalid token', 'Token is missing')
    }
    try {
      const iss = this.tokenValidator.validateToken(token)
      return Result.ok<boolean>(200, iss === this.CLIENT_ID)
    } catch (error) {
      console.error('Error validating token:', error)
      return Result.fail<string>(401, 'Invalid token', 'Error occurred while validating token')
    }
  }
}