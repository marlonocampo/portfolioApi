import jwt from 'jsonwebtoken'
import { AuthApp } from '../../../domain/authApp/AuthApp.js'

export class JwtValidateAppToken implements AuthApp {
  private clientSecret = process.env.CLIENT_SECRET

  sign (payload: { iss: string }): string {
    return jwt.sign(payload, this.clientSecret as string, { expiresIn: '1h' })
  }

  validateToken (token: string) {
    const response = jwt.verify(token, this.clientSecret as string) as jwt.JwtPayload
    return response.iss as string
  }
}