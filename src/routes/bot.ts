import { Router } from 'itty-router'
import { missing, json } from 'itty-router-extras'

import {handleFetch, hanldeSendMessage} from '../handlers/bot'

const v1 = Router({ base: '/v1' }) // must define base for child routers


v1
  .get('/bot/test', () => new Response("Bot is working!", { status: 200 }))
  .get('/bot/getMe',handleFetch)
  .post('/bot/webhook', hanldeSendMessage)
  .all('*', () => missing('API v1/handler could not find that endpoint.'))

export default v1