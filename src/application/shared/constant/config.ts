import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

export const environment: string = process.env.ENVIRONMENT ?? 'EnvironmetNoDefined'
export const APP_PORT = Number(process.env.APP_PORT)

export async function initServerDB (): Promise<void> {
  const DB_URL_HOST = process.env.DB_URL_HOST ?? ''
  const PASSWORD_DB = process.env.PASSWORD_DB ?? ''

  const connectionStringBd = DB_URL_HOST.replace('<password>', encodeURIComponent(PASSWORD_DB)) ?? ''
  console.log(' -- 🔧 Trying to connect to database...')
  console.log(` -- 🔧 Connection string: ${connectionStringBd}`)

  try {
    const res = await mongoose.connect(connectionStringBd)
    if (res.connection.readyState === 1) {
      console.log('👍🏻Database connected!')
    }
  } catch (error) {
    console.error('❌ Error: Database server is not running')
    throw new Error(String(error))
  }
}
