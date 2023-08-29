import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Setup Koa';
});

app.listen(3000);