/**
 * Created by Administrator on 2018/9/18.
 */
var express=require('express');
var path=require('path');
var app=express();
var db=require('./model/db');
var session = require('express-session');   //储存文件
var router = require('express-router');   //路由
var index=require('./index');
var bodyparser = require('body-parser');
var cookie = require('cookie-parser');
//app.use(session());
app.use(cookie());
//处理post请求
//处理JSON数据
app.use(bodyparser.json());
//处理字符串
app.use(bodyparser.urlencoded({extended:true}));
//加载静态资源目录
app.use(express.static(path.join(__dirname,"static")));  //Handler/AdminHandler
//node解决跨域问题
app.use('/Handler',index);
app.all('*',function (req, res, next) {
    //响应头  允许所有网段请求
    res.header('Access-Control-Allow-Origin', '*');
    //响应头权限
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    //方式
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    //版本
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
module.exports=app;












