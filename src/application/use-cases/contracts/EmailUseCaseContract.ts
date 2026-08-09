import { EmailDto } from '../../dtos/EmailDto.js'
import { Result } from '../../shared/Result.js'

export interface EmailUseCaseContract {
  send: (emailDto: EmailDto) => Promise<Result<void>>
}
