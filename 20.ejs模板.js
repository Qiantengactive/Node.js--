ejs模板引擎
	<a href="<%= url %>"><img src="<%= imageURL %>" alt=""></a>
	数据绑定，就成为一个完整的html字符串了。
	前台的模板，我们现在要学习的是后台的模板。
	后台模板，著名的有两个，第一个叫做ejs； 第二个叫做jade。

	是npm第三方包。

案例一：
var  ejs=require("ejs");
var  string="好高兴 ，我买了手机ip<%= a%>plus";

var data={
	a:6
};
var html=ejs.render(string,data);
// var html=ejs.render(模板,数据);
console.log(html);


案例二：
index.ejs页面
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>h3</title>
	</head>
	<body>
		<h3>好高兴 ，我买了手机ip<%= a%>plus;</h3>
		<ul>
		        <% for(var i = 0 ; i < news.length ; i++){ %>
		            <li><%= news[i] %></li>
		        <% } %>
		</ul>
		<ul>
			<% for(var i=0;i<new2.length;i++){
					if(new2[i].count>15){
			%>
					<li><%= new2[i].title %></li>
			<%}}%>
		</ul>
	</body>
	</html>
ejsindex.js页面
	// 需要安装ejs模板
	var  ejs=require("ejs");
	var fs=require('fs');
	var http=require('http');


	var server=http.createServer(function(require,response){
	fs.readFile('./index.ejs',(err,data)=>{
		 var template=data.toString();
		 var directionary={
		 	a:6,
		 	news:["1期班太牛逼了","高薪就业","哈哈哈哈哈"],
		 	new2:[
		 		{"title":'aaaaaa',"count":10},
		 		{"title":'baaaaa',"count":20},
		 		{"title":'caaaaa',"count":30}
		 	]
		 }
	     var html=ejs.render(template,directionary);
		 console.log(html);
		 response.writeHead(200,{'Content-Type':'text/html'})
		 response.end(html);
		})
	}).listen(8080);

	// var html=ejs.render(模板,数据);