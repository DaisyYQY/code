/**
 * Created by Administrator on 2018/9/13.
 */
/*
* express 加载 ejs
*
*/

var express = require('express');
var app = express();
//设置模板引擎   放置模板的文件夹必须为views
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    //如何设置数据  new  渲染的模板
   res.render('new',{
       news:[    //news  渲染的数据
           {title:"新闻"},
           {title:"关于"},
           {title:"时间"}
       ]
   })
}).listen(8080);

















