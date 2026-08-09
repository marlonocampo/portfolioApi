import { EmailUseCaseContract } from '../contracts/EmailUseCaseContract.js'
import { Result } from '../../shared/Result.js'
import { EmailService } from '../../../domain/services/email/EmailService.js'
import { EmailDto } from '../../dtos/EmailDto.js'

export class EmailUseCase implements EmailUseCaseContract {
  constructor (private emailService: EmailService) { }

  async send (emailDto: EmailDto): Promise<Result<void>> {
    const { subject, body, nameContact, emailContact } = emailDto

    if (!nameContact || !subject || !body) {
      return Result.fail<void>(400, 'Missing required parameters: to, subject, and body are required.')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailContact)) {
      return Result.fail<void>(400, 'Invalid email address format to email contact prop.')
    }

    try {
      await this.emailService.send({
        subject,
        body,
        nameContact,
        emailContact
      })
    } catch (error: Error | any) {
      console.log('❌Error sending email:', error)
      return Result.fail<void>(500, `Error sending email: ${error.message}`)
    }
    return Result.ok<void>(200, undefined)
  }
}
