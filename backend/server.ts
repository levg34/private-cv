import Koa from 'koa'
const app = new Koa()

import cv from './data/cv.json'

app.use(async ctx => {
    if (ctx.method === 'GET' && ctx.path === '/cv') {
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Content-Type', 'application/json')
        ctx.body = cv
    } else {
        ctx.body = '404'
    }
})

app.listen(3000)
