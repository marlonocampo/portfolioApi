import express from 'express'
import { isDBServerUp, environment, APP_PORT } from './constant/config.js'
import { counterRoute } from './api/routes/counterRoute.js'
import cors from 'cors'

async function startServer (): Promise<void> {
  console.log('🚀⏳ Starting server...')
  // configure environment variables
  console.log(`🔧 Environment: ${String(environment)}`)

  // check if the database server is up
  await isDBServerUp()

  const app = express()
  // app.use(corsMiddlewares)
  app.use(express.json())
  app.use(cors({
    // origin: 'http://localhost:3000'
  }))
  app.use('/counter', counterRoute) // register the counter route

  app.listen(APP_PORT, () => {
    console.log(`🚀🆗 Server is running on port ${String(APP_PORT)}`)
  })
}

await startServer()
