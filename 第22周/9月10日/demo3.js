/**
 * Created by Administrator on 2018/9/10.
 */
var people=require('bar.js');
var xiaoming=new people('aaa','20','1');//实例对象
//console.log(xiaoming);
xiaoming.sayHello();


//var utils=require('./bar/bar.js');
//console.log(utils.name);

//var utils= require('./bar/bar.js');
//utils();

//var utils= require('./bar/bar.js');
//utils.sayHello();

//var utils= require('./bar/bar.js');
//var u= new utils();
//u.sayHello();

    //1、路径解析，得到规范化的路径格式
//var path=require('path');
//var myPath=path.normalize(__dirname+'./第22周//9月10日');
//console.log(myPath);

//2、路径结合、合并，路径最后不会带目录分隔符
//var path=require('path');
//var path1='./第22周',
//    path2='/9月10日/',
//    path3='test';
//
//var myPath = path.join(path1,path2,path3);
//console.log(myPath);

//3、获取绝对路径
//var path=require('path');
//var myPath = path.resolve('F:/','H5','/test');
//console.log(myPath);


//4、获取相对路径
//var path=require('path');
//var from = 'F:\\第20周\\8月27日\\',
//    to = 'F:/第22周/';
//
//var _path = path.relative(from, to);
//console.log(_path);

//5、path.dirname(p)  获取路径中目录名
//var path=require('path');
//var myPath = path.dirname(__dirname + '/test/foo.js');
//console.log(myPath);

//6、path.basename(path, [ext])
// 获取路径中文件名,后缀是可选的，如果加，请使用'.ext'方式来匹配，则返回值中不包括后缀名
//var path=require('path');
//myPath=path.basename(__dirname+'/test/foo.js','.js');
//console.log(myPath);


//7、path.extname(path)  获取路径中的扩展名，如果没有'.'，则返回空
//var path=require('path');
//console.log(path.extname('/js/static/index.html'));

//8、path.sep属性   返回操作系统中文件分隔符； window是'\\', Unix是'/'
//var path=require('path');
//console.log(path.sep);


//9、path.delimiter属性  返回操作系统中目录分隔符，如window是';', Unix中是':'
var path=require('path');
console.log(path.delimiter);



