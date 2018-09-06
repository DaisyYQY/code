/**
 * Created by Administrator on 2018/9/5.
 */
var http=require('http');
var url=require('url');
http.createServer((req,res)=>{
    var query=url.parse(req.url,true).query;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    console.log('username:' + query.username);
    console.log('password:' + query.password);
    //res.write('用户名:'+query.username);
    res.end('用户名:'+query.username+'密码:'+query.password);

}).listen(8080,'localhost');













