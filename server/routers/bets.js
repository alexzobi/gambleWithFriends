const Router = require('@koa/router');

const bets = new Router();

bets.get('/bets', (ctx) => {
  ctx.body = 'you reached bets GET';
});

bets.put('/bets', (ctx) => {
  ctx.body = 'you reached bets put';
});

bets.post('/bets', (ctx) => {
  ctx.body = 'you reached bets post';
});

bets.delete('/bets', (ctx) => {
  ctx.body = 'you reached bets delete';
});

module.exports = bets;
