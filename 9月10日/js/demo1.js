/**
 * Created by Administrator on 2018/9/10.
 */
/*
*1.响应头案例   知识点  js  indexof
理解node没有web容器的概念
* 2.模块  exports   modules.export  node_modules
* 3.模板引擎  ejs  jade  art-template
*/
var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require('path');

http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname;
    //判断在地址栏里面输入的是文件地址还是文件夹地址
    if(pathname.indexOf('.')==-1){
        //127.0.0.1:3000/index.html
        pathname+='index.html'
    }
    //取到文件的路径  logo.png  http://127.0.0.1:3000/static/logo.png
    var fileurl='./'+path.normalize('./static'+pathname);
    //console.log(fileurl);
    var extname=path.extname(pathname);
    fs.readFile(fileurl,(err,data)=>{
        //console.log(data);
        if(err){
            res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
            res.end('404,页面未找到');
        }else{
            getmime(extname,(mime)=>{
                res.writeHead(200,{'Content-type':mime+';charset=utf-8'});
                res.end(data);
            })
        }
    });
}).listen(8080,'localhost');

function getmime(extname,callback){
    fs.readFile('./mime.json',(err,data)=>{
        var mimeJson=JSON.parse(data);
        //console.log(mimeJson);
        var mime=mimeJson[extname]||'text/plain';
        //text/plain  解析文本
        callback(mime);
    });
}
















