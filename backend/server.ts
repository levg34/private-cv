import Koa from 'koa'
import { hideData } from './utils/utils'

const app = new Koa()

import cv from './data/cv.json'
import mask from './data/mask.json'
import { CurriculumVitaeMask } from './types/mask-types'

app.use(async (ctx) => {
    if (ctx.method === 'GET' && ctx.path === '/cv') {
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Content-Type', 'application/json')
        ctx.body = hideData(cv, mask as unknown as CurriculumVitaeMask)
    } else {
        ctx.body = '404'
    }
})

app.listen(3000)
