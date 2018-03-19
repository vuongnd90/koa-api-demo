const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(1);
  await next();
  console.log(2);
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}`);
})

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(3);
  await next();
  console.log(4);
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async ctx => {
  console.log(5);
  ctx.body = 'Hello World';
});

app.on('error', err => {
  log.error('server error', err)
});

app.listen(4000);


