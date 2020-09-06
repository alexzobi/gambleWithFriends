const Router = require('@koa/router');

const awards = new Router();

awards.get('/awards', (ctx) => {
  ctx.body = 'you reached awards GET';
});

awards.put('/awards', (ctx) => {
  ctx.body = 'you reached awards put';
});

awards.post('/awards', (ctx) => {
  ctx.body = 'you reached awards post';
});

awards.delete('/awards', (ctx) => {
  ctx.body = 'you reached awards delete';
});

module.exports = awards;
