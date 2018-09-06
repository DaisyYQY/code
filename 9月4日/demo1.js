/**
 * Created by Administrator on 2018/9/4.
 */
var http=require('http');
var server=http.createServer((req,res)=>{
    //形参   实参
    //req =>require  请求  res=>response响应

    //设置响应头   状态码  设置类型   html类型   编码格式
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    res.end("hello world 中国");  //结束响应
})
//监听服务   端口  ip
server.listen(3000,'localhost');





















