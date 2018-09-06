/**
 * Created by Administrator on 2018/9/5.
 */
var http=require('http');
var url=require('url');
var path=require('path');
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    //console.log(req.url);
    //url.parse()  json.stringify  转换成字符串     json.parse  json转换成对象
    var pathname=url.parse(req.url).pathname;
    //pathname   /后面的
    var query=url.parse(req.url,true).query;
    //query    ？后面的    query时如果第二个参数传回true 会转换为一个对象
    var age=age.query;
    console.log(pathname);
    console.log(query);
    console.log(age);
    res.end('232');
}).listen(3000,'localhost');




















