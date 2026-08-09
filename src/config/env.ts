import dotenv from 'dotenv'
dotenv.config()

export const envs = {
  smtp: {
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    fromUser: process.env.SMTP_FROM_USER!,
    password: process.env.SMTP_PASSWORD!,
  },
}
