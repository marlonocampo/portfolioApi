import { Result } from '../../../application/shared/Result.js'
import { EmailRequest } from '../../entities/EmailRequest.js'

export interface EmailService {
  send: (emailRequest: EmailRequest) => Promise<Result<void>>
}
 