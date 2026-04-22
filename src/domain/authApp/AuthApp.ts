export interface AuthApp {
  sign(payload: { iss: string }): string
  validateToken (token: string): string
}

