const Koa = require('koa')

// require('koa-router')()是一个函数
const router = require('koa-router')()

const app = new Koa()

//log requres URL
app.use(async (ctx, next) => {
  console.log(`Process${ctx.request.method}`)
  await next()
})

//add request url
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name
  ctx.response.body = `<h1>hello, ${name}</h1>`
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>`
})

// 执行中间件
app.use(router.routes())

app.listen(3000)
console.log('执行url这个模块')