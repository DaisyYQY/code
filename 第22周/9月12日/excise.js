/**
 * Created by Administrator on 2018/9/12.
 */
var html = "<h1>"+data.title+"</h1>";
html+="<ul>"
for (var i = 0; i < data.supplies.length; i++) {
    html += "<li><a href='supplies/"+data.supplies[i]+"'>"
    html += data.supplies[i]+"</a></li>"
}
html += "</ul>"










