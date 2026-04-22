import cors from 'cors'

export function corsMiddleware () {
  console.log('🆗 CORS middleware applied')
  return cors({
    origin: '*', //process.env.PORTFOLIO_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
}
