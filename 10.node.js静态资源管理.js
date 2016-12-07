node.js静态资源管理

1.src href链接无法引入
服务器端没有路由逻辑处理请求 
2.使用switch判断或者使用json

var CONF     = BASE_DIR+"/conf";
var STATIC   = BASE_DIR+"/static";

var realPath = STATIC+pathname;
var mmieType = mmieConf[extname]  ? mmieConf[extname] :'text.plain';

function getMmieConf() {
    var routerMsg={};
    try{
        var str=fs.readFileSync(CONF+'mmie_type.json','utf8');
        routerMsg=JSON.parse(str);
    }catch(e){
        sys.debug("JSON parse fails");
    }
    return routerMsg;
}

3.静态文件缓存时间控制
客户端发送一个带条件的GET请求 文档内容没有更改的话 服务器返回304状态码
a.不确定文件有效：
生成get请求 ==》判断文件是否修改
1>.修改	   ==》服务器发送文件给客户端
2>.没有修改==》服务器发送304状态码
b.确定浏览器缓存有效：
1>.客户端不发送get请求
判断方式：浏览器判断express头 是够有效



区别
atime  access time
ctime  change time
mtime  modify time
1.更改文件内容  才会更新mtime 
2.改名字 改属性更新ctime
3.每次查看一次更新一次
