/**
 * Created by Administrator on 2018/9/13.
 */
/*
* 静态资源目录  static   public
*/
var express = require('express');
var app = express();
//静态资源的加载
app.use('/',express.static('./public'));
app.listen('8080');
//浏览器默认index.html

//app.use('/', function (req,res,next) {
//    console.log(req.originalUrl);
//    console.log(req.baseUrl);
//    console.log(req.path);
//    next();
//});
//app.listen('8080');
























