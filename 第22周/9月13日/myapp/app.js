/**
 * Created by Administrator on 2018/9/13.
 */
var express=require('express');
var app=express();
//Hello World
//app.get('/', function (req,res) {
//    res.send('Hello World!');
//});
//var server = app.listen(8080, function () {
//    var host = server.address().address;
//    var port = server.address().port;
//    console.log('Example app listening at http://%s:%s', host, port);
//});

//基本路由
//app.get('/',(req,res)=>{
//    res.send('Hello World!');
//});
//app.post('/',(req,res)=>{
//    res.send('Got a POST request');
//});
//app.put('/user',(req,res)=>{
//    res.send('Got a PUT request at /user');
//});
//app.delete('/user',(req,res)=>{
//    res.send('Got a DELETE request at /user');
//});

//静态文件
//app.use(express.static('public'));
//app.use(express.static('files'));
//app.use('/static',express.static('public'));

//路由
//app.get('/', function (req,res) {
//    res.send('hello world!');
//});
//app.get('/', function (req,res) {
//    res.send('Get require to the homepage');
//});
//app.post('/', function (req,res) {
//    res.send('Post require to the homepage');
//});
//app.all('/secret', function (req,res,next) {
//    console.log('Accessing the secret section...');
//    next();
//});

//app.get('/', function (req,res) {
//    res.send('root');
//});
//app.get('/about', function (req,res) {
//    res.send('about');
//});
//app.get('/random.text', function (req,res) {
//    res.send('random.text');
//});

//// 匹配 acd 和 abcd
//app.get('/ab?cd', function (req,res) {
//    res.send('ab?cd');
//});
//// 匹配 abcd、abbcd、abbbcd等
//app.get('/ab+cd', function (req,res) {
//    res.send('ab+cd');
//});
//// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
//app.get('/ab*cd', function (req,res) {
//    res.send('ab*cd');
//});
//// 匹配 /abe 和 /abcde
//app.get('/ab(cd)?e', function (req,res) {
//    res.send('ab(cd)?e');
//});

//// 匹配任何路径中含有 a 的路径：
//app.get(/a/, function (req,res) {
//    res.send('/a/');
//});
//
//// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
//app.get(/.*fly$/, function (req,res) {
//    res.send('/.*fly$/');
//});

//路由句柄
////使用一个回调函数处理路由：
//app.get('/example/a', function (req,res) {
//    res.send('Hello from A!');
//});
////使用多个回调函数处理路由（记得指定 next 对象）：
//app.get('/example/b', function (req,res,next) {
//    console.log('response will be sent by the next function...');
//    next();
//}, function (req,res) {
//    res.send('Hello from B!');
//});


////使用回调函数数组处理路由：
//var cb0= function (req,res,next) {
//    console.log('CB0');
//    next();
//}
//var cb1= function (req,res,next) {
//    console.log('CB1');
//    next();
//}
//var cb2= function (req,res,next) {
//    res.send('Hello from C!');
//}
//app.get('/example/c',[cb0,cb1,cb2]);

////混合使用函数和函数数组处理路由：
//var cb0= function (req,res,next) {
//    console.log('CB0');
//    next();
//}
//var cb1= function (req,res,next) {
//    console.log('CB1');
//    next();
//}
//app.get('/example/d',[cb0,cb1], function (req,res,next) {
//    console.log('response will be sent by the next function...');
//    next();
//}, function (req,res) {
//    res.send("Hello from D!");
//});

//app.route('/book')
//    .get(function (req,res) {
//        res.send('Get a random book');
//    })
//    .post(function (req,res) {
//        res.send('Add a book');
//    })
//    .put(function (req,res) {
//        res.send('Update the book');
//    })



app.listen(8080);

















