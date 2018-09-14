/**
 * Created by Administrator on 2018/9/13.
 */
var express = require('express');
var app = express();
//// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
//app.use(function (req,res,next) {
//    console.log('Time', Date.now());
//    next();
//});
//// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
//app.use('/user/:id', function (req,res,next) {
//    console.log('Request Type:', req.method);
//    next();
//});
//// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
//app.get('/user/:id', function (req,res,next) {
//    res.send('USER');
//});

//// 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
//app.use('/user/:id', function (req,res,next) {
//    console.log('Request URL:', req.originalUrl);
//    next();
//}, function (req,res,next) {
//    console.log('Request Type:', req.method);
//    next();
//});

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
//app.get('/user/:id', function (req,res,next) {
//    console.log('ID:', req.params.id);
//    next();
//}, function (req,res,next) {
//    res.send('User Info');
//});
// 处理 /user/:id， 打印出用户 id
//app.get('/user/:id', function (req,res,next) {
//    res.end(req.params.id);
//});


//报错
//app.get('/user/:id', function (req,res,next) {
//    if(req.params.id==0) next('route');
//    else next();
//}, function (req,res,next) {
//    res.render('regular');
//});
//app.get('/user/:id', function (req,res,next) {
//    res.render('special');
//});

////路由级中间件
//var router = express.Router();
//router.use(function (req,res,next) {
//    console.log('Time:', Date.now());
//    next();
//});
//router.use('/user/:id', function (req,res,next) {
//    console.log('Request URL:', req.originalUrl);
//    next();
//}, function (req,res,next) {
//    console.log('Request Type:', req.method);
//    next();
//});
//
////此处报错
//router.get('/user/:id', function (req,res,next) {
//    if(req.params.id==0) next('route');
//    else next();
//}, function (req,res,next) {
//    res.render('regular');
//});
//router.get('/user/:id', function (req,res,next) {
//    console.log(req.params.id);
//    res.render('special');
//});
//app.use('/',router);

////错误处理中间件
//app.use(function (err,req,res,next) {
//    console.error(err.stack);
//    res.status(404).send('Something broke!');
//});


////内置中间件
//var options = {
//    dotfiles:'ignore',
//    etag:false,
//    extensions:['htm','html'],
//    index:false,
//    maxAge:'1d',
//    redirect:false,
//    setHeaders: function (res,path,stat) {
//        res.set('x-timestamp',Date.now());
//    }
//}
//app.use(express.static('public',options));
//app.use(express.static('public'));
//app.use(express.static('upload'));
//app.use(express.static('files'));


//第三方中间件
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.listen(8080);









