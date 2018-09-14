/**
 * Created by Administrator on 2018/9/12.
 */
var express=require('express');
var app = express();

//app.get('/', function(req, res){
//    res.send('hello world');
//});
//app.listen(3000);

app.locals.title = 'My App';
app.locals.strftime = require('strftime');
app.locals.email = 'me@myapp.com';

















