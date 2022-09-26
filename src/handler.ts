import { Router } from 'itty-router'
import { missing, json } from 'itty-router-extras'

import handlerRoutes from './routes/routes'
import botRoutes from './routes/bot'

const parent = Router()

parent
  .all('/v1/handler*', handlerRoutes.handle)
  .all('/v1/bot*', botRoutes.handle)
  .all('*', () => missing('Root API could not find that endpoint.'))


export const handleRequest = (request: Request): Promise<Response> => parent.handle(request)