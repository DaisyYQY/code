/**
 * Created by Administrator on 2018/9/13.
 */
/*
*此案例讲解app.use及默认路径
*
*/
var express = require('express');
var app = express();
//如果路径里面没有任何东西时，那么默认的路径为"/"  next()是一个执行函数
//app.use((req,res,next)=>{
//    console.log(new Date());
//    next();
//    //res.send('data');
//});

app.get('/admin',(req,res)=>{
    //获取路由当前安装的URL路径 输出斜杠后面所有的
    console.log(req.originalUrl);
    //获取原始请求URL  输出空
    console.log(req.baseUrl);
   //获取请求路径  只输出斜杠后面第一位
    console.log(req.path);
    res.end('data');
});
app.listen(8080);
















