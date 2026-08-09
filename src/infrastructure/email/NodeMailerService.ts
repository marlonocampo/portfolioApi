import { Result } from '../../application/shared/Result.js'
import { EmailService } from '../../domain/services/email/EmailService.js'
import nodemailer from 'nodemailer'
import { envs } from '../../config/env.js'
import { EmailRequest } from '../../domain/entities/EmailRequest.js'

export class NodeMailerService implements EmailService {
  private readonly transporter: any
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: envs.smtp.host,
      port: envs.smtp.port,
      secure: false,
      auth: {
        user: envs.smtp.fromUser,
        pass: envs.smtp.password,
      },
    })
  }

  async send (emailRequest: EmailRequest): Promise<Result<void>> {
    const { subject, body, emailContact } = emailRequest
    await this.transporter.sendMail({
      from: envs.smtp.fromUser,
      to: emailContact,
      subject,
      html: body
    })
    return Result.ok<void>(200, undefined)
  }
}
