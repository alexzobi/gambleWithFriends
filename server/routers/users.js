const Router = require('@koa/router');

const users = new Router();

users.get('/users', (ctx) => {
  ctx.body = 'you reached users GET';
});

users.put('/users', (ctx) => {
  ctx.body = 'you reached users put';
});

users.post('/users', (ctx) => {
  ctx.body = 'you reached users post';
});

users.delete('/users', (ctx) => {
  ctx.body = 'you reached users delete';
});

module.exports = users;
