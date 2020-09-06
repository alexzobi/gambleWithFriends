require('dotenv').config();
const Koa = require('koa');
const koaBody = require('koa-body');

const users = require('./routers/users');
const bets = require('./routers/bets');

const app = new Koa();
const PORT = process.env.PORT;

console.log('ALEXDEBUG: process.env', process.env)

app.use(koaBody());

app.use(async (ctx, next) => {
  console.log('Route: ', ctx.request.url);
  console.log('method: ', ctx.request.method);

  if (ctx.request.url === '/upload') {
    console.log('body: multi-part/formData')
  } else {
    console.log('body: ', ctx.request.body);
  }

  await next();

  console.log('Response Status: ', ctx.response.status);
  console.log('Response Message: ', ctx.response.message);
});

app
  .use(users.routes())
  .use(bets.routes())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
