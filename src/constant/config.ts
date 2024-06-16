import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

export const environment: string = process.env.ENVIRONMENT ?? 'NoDefinedEnvironmet'
export const APP_PORT = Number(process.env.APP_PORT) ?? 30012

export async function isDBServerUp (): Promise<void> {
  const DB_URL_HOST = process.env.DB_URL_HOST ?? ''
  const passwordBd = process.env.PASSWORD_DB ?? ''
  const connectionStringBd = DB_URL_HOST.replace('<password>', encodeURIComponent(passwordBd)) ?? ''
  console.log(' -- 🔧 Trying to connect to database')
  console.log(` -- 🔧 Connection string: ${connectionStringBd}`)

  try {
    await mongoose.connect(connectionStringBd)
    console.log('👍🏻Database connected!')
  } catch (error) {
    console.error('❌ Error: Database server is not running')
    console.error(error)
    throw new Error('Function not implemented.')
  }
}
