import { initServerDB, environment, APP_PORT } from './infrastructure/database/config.js'
import { createApp } from './infrastructure/server/app.js'

async function startServer (): Promise<void> {
  console.log('🚀⏳ Starting server...')
  // configure environment variables
  console.log(`🔧 Environment: ${String(environment)}`)

  // check if the database server is up
  await initServerDB()
  const app = createApp()


  app.listen(APP_PORT, () => {
    console.log(`🆗 Server is running on port ${String(APP_PORT)}`)
  })
}

await startServer()
