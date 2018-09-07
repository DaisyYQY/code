/**
 * Created by Administrator on 2018/9/6.
 */
var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/script;charset=utf-8'});
    fs.readFile('./demo3.js',(err,data)=>{
        res.end(data);
    });

}).listen(8080,'localhost');



















