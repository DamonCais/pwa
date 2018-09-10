const path = require('path')

const Koa = require('koa')
const static = require('koa-static')
const Router = require('koa-router')

const koaBody = require('koa-body');
const app = new Koa()

app.use(koaBody());
const staticPath = '../dist'
app.use(static(
    path.join(__dirname, staticPath)
))


let router = new Router();
router.get('/getinfo', require('./getinfo')());
app.use(router.routes());


app.listen(80);
console.log('55555')