node.js cookie 处理
http是无状态的协议，cookie便是为此而生,用以识别用户身份。

设置COOKIE
注意应该在任何输出前设置cookie，否则会报错。
1.使用setHeader设置cookie


var app=require('express').createServer();

app.get('/cookie',function(req,res){

    res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);

    res.send('cookie opreration');

});

console.log('It works');

app.listen(2012);
2.使用writeHead设置
注意writeHeade只能使用一次并在res.end()前调用。

1
var app=require('express').createServer();

app.get('/cookie',function(req,res){

    res.writeHead(200, {

    'Set-Cookie': 'writecookie=test',

    'Content-Type': 'text/plain'

  });

    res.end('Hello World\n');

});

console.log('It works');

app.listen(2012);
获取COOKIE
我们看一下header头的信息：


res.send('HEADERS: ' + JSON.stringify(req.headers));

HEADERS: {
  "host":"localhost:2012",
  "connection":"keep-alive",
  "cache-control":"max-age=0",
  "user-agent":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1145.0 Safari/537.1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","accept-encoding":"gzip,deflate,sdch","accept-language":"zh-CN,zh;q=0.8,en;q=0.6","accept-charset":"GBK,utf-8;q=0.7,*;q=0.3",
  // cookie
  "cookie":"type=ninja; language=javascript; writecookie=test"}
于是我们这样处理：

view sourceprint?

var cookies = {};

  req.headers.cookie && req.headers.cookie.split(';').forEach(function( cookie ) {

    var parts = cookie.split('=');

    cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();

  });

  res.send(cookies['type']);//ninja
