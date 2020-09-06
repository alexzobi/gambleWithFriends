const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const koaBody = require('koa-body');
const router = new Router();
const path = require('path')
// const { details } = require('./mockData/exploreFlow/viewSchema');

const { mgSignup, mgTrackConsent, mgExplore }  = require('./mockData/activities');

const PORT = 3000;
let _age = 21;
let _height = 175;
let _weight = 78;

router.post('/updateStats', async ctx => {
  const { height, age, weight } = ctx.request.body;

  if (!height && !age && !weight) return ctx.status = 400;

  if (height) _height = height;
  if (weight) _weight = weight;
  if (age) _age = age;

  ctx.body = {
    age: _age,
    height: _height,
    weight: _weight,
  }
})

router.post('/upload', koaBody({
  formidable:{
    uploadDir: path.join(__dirname,'/uploads'),
    keepExtension: true,
  },    //This is where the files would come
  multipart: true,
  urlencoded: true,
}), async ctx => {
  ctx.body = "file uploaded";
})

router.get('/ping', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
})

router.get('/exploreFlow', async (ctx) => {
  ctx.body = details;
})

router.get(`/v2/activity/:activityId`, async (ctx) => {
  const activityMap = {
    mgSignup,
    mgTrackConsent,
    mgExplore,
  };

  ctx.body = activityMap[ctx.params.activityId];
})

app.use(async (ctx, next) => {
  console.log('Route: ', ctx.request.url);
  console.log('method: ', ctx.request.method);

  if (ctx.request.url === '/upload'){
    console.log('body: multi-part/formData')
  } else {
    console.log('body: ', ctx.request.body);
  }

  await next();

  console.log('Response Status: ', ctx.response.status);
  console.log('Response Message: ', ctx.response.message);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;