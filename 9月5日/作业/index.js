/**
 * Created by Administrator on 2018/9/5.
 */
var http=require('http');
var url=require('url');
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(pathname=='/student'&&(query.id).length==4){
        res.write('id:'+query.id);
        res.end('name:zhangsan');
    }else if(pathname=='/teacher'&&(query.id).length==4){
        res.write('id:'+query.id);
        res.end('name:lisi');
    }else{
        res.end('该用户不存在');
    }


}).listen(8080,'localhost');












