import Koa from 'koa'
import cors from '@koa/cors'
import json from 'koa-json'
import cache from 'koa-response-cache'
import logger from 'koa-logger'
import koaRouter from 'koa-router'
import npmSearch from './routes/npm/search'
import npmGetPackage from './routes/npm/get-package'
import githubGetRepo from './routes/github/get-repo'

const app = new Koa()

// CORS
app.use(cors())

// Cache
const options = {
  expire: 6000,
}
app.use(cache(options))

// Pretty print json
app.use(json())

// Logging
app.use(logger())

// Routing
const router = koaRouter()
router.get('/npm/search', npmSearch)
router.get('/npm/package', npmGetPackage)
router.get('/github/repos/:owner/:repo', githubGetRepo)
app.use(router.routes())

const port = process.env.PORT || 3600
console.log(`Starting server in port ${port}`)
app.listen(port)
