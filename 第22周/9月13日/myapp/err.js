/**
 * Created by Administrator on 2018/9/13.
 */
var express = require('express');
var app = express();

app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser());
app.use(methodOverride());
app.use(function (err,req,res,next) {
    //业务逻辑
});

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err,req,res,next){
    console.error(err.stack);
    next(err);
}
function clientErrorHandler(err,req,res,next){
    if(req.xhr){
        res.status(500).send({err:'Something blew up!'});
    }else{
        next(err);
    }
}

function errorHandler(err,req,res,next){
    res.status(500);
    res.render('error',{error:err});
}

app.get('/a_route_behind_paywall', function checkIfPaidSubscriber(req,res,next) {
    if(!req.user.hasPaid){
        next('route');
    }
}, function getPaidContent(req,res,next) {
    PaidContent.find(function (err,doc) {
       if(err) return next(err);
        res.json(doc);
    });
});

function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(500);
    }
    res.status(500);
    res.render('error',{error:err});
}

app.listen(8080);























