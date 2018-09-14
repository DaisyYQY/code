/**
 * Created by Administrator on 2018/9/13.
 */
var express = require('express');
var app = express();
app.get("/aa", function (req,res) {
    res.send('data');
}).listen(8080);

//var http = require('http');
//http.createServer((req,res)=>{
//    if(req.url=="/aa"){
//        res.end('data');
//    }
//}).listen(8080,'127.0.0.1');

/*
* 1.res.send({})  如果涉及到动态数据的时候就用此方法
* 2.res.end()  涉及到静态数据就用此方法
* */























