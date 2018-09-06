/**
 * Created by Administrator on 2018/9/4.
 */
var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    //res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    if(req.url=='/red.html'){
        fs.readFile('./red.html',(err,data)=>{
            res.end(data)
        })
    }else if(req.url=='/green.html'){
        fs.readFile('./green.html',(err,data)=>{
            res.end(data)
        })
    }else if(req.url=='/red.css'){
        fs.readFile('./red.css',(err,data)=>{
            res.writeHead(200,{'Content-type':'text/css;'});
            res.end(data)
        })
    }else if(req.url=='/img/1.jpg'){
        fs.readFile('./img/1.jpg',(err,data)=>{
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(data)
        })
    }else{
        res.end('没有了')
    }

}).listen(3000,'127.0.0.1');

//1、css加载
// 2、图片加载






















