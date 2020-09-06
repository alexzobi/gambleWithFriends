const Router = require('@koa/router');

const users = new Router();

users.get('/users', (ctx) => {
  ctx.body = 'you reached users GET';
});

users.put('/users', (ctx) => {
  ctx.body = 'you reached users put';
});

users.post('/users/signup', (ctx) => {
  const { email, password, firstName, lastName } = ctx.request.body;

  if (!email || !password || !firstName || !lastName) ctx.throw(400);

  ctx.body = 'you reached users post';
});

users.post('/users/login', (ctx) => {
  ctx.body = 'you reached users post';
});

users.delete('/users', (ctx) => {
  ctx.body = 'you reached users delete';
});

module.exports = users;
