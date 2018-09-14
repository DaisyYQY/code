/**
 * Created by Administrator on 2018/9/13.
 */
//var express = require('express');
//var app = express();
//app.use('/book/:id',function(req,res,next){
//    console.log('ID', req.params.id);
//    next();
//});
//
//app.route('/book')
//    .get(function (req,res) {
//        res.send('Get a random book');
//    })
//.post(function (req,res) {
//    res.send('Add a book');
//})
//.put(function (req,res) {
//    res.send('Update the book');
//});

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var favicon = require('server-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

var app = express();
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');
app.use(express.favicon(__dirname+'/public/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.session({resave:true,
    saveUninitalized:true,
    secret:'uwotm8'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
app.use(express.static(path.join(__dirname,'public')));
app.get('/',routes.index);
app.get('/users',user.list);

if('development'==app.get('env')){
    app.use(express.errorHandler());
}
var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('Express server listening on port' + app.get('port'));
});

//app.listen(app.get('port'), function () {
//    console.log('Express server listening on port' + app.get('port'));
//});

app.listen(8080);









