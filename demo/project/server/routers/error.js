/**
 * 错误页面子路由
 */

const router = require('koa-router')()
const routers = router.get('*', async (ctx) => {
  const title = 'error'
  await ctx.render('error', {
    title
  })
})
module.exports = routers