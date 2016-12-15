模块：
	1.原生模块 
		原生模块Node.jsAPI提供的原生模块
		原生模块在启动的时候已经被加载
	2.文件模块
		动态加载模块
		由原生模块module来实现和完成，调用Node.js该模块的require方法实现加载
注意：
	node.js会对原生模块和文件模块都进行缓存，第二次require该
	模块，不会有重复开销加载模块，只从缓存中读取

1.原生模块调用：
 使用API require来加载相应的Node.js模块，require加载成功后会返回
 一个Node.js模块对象，该对象拥有该模块的所有属性和方法
 var httpModule=require("http");  //require http模块
   http：模块具有createServer request get等多个属性和方法
   httpModule：为require原生HTTP模块返回的对象
   httpModule.createServer(function(request,response)).listen(port)
2.文件模块调用方法
	1.路径 指定路径
	var test=require('path/../test.js');
	var test=require('path/../test');  //js后缀可省
	注意：path/../test.js  				绝对路径(物理路径)
		  ./  ==>require("./test.js")   相对路径
		  test返回值：requie加载模块返回的是一个对象
文件中的方法只有通过exports和module.exports对象暴露给外部 外部才能使用
     2.__dirname&&__filename 
		 var BASE_DIR=__dirname;
		 console.log(BASE_DIR);
		 E:\trynodejs\book\third\fileOpera 返回当前操作路径

		获取当前脚本所在路径  __dirname  到他爸     xxx/xxx/
		获取文件所在路径      ——filename 到他自己   xxx/xxx/aa.js
注意：所有文件都必须是绝对路径（物理路径）==》__dirname+'/name.js'
__dirname
---用于获取当前文件所在目录的完整路径
---在REPL环境无效
__filename
---用于获取当前文件的完整路径



exports.name="danhuang";
exports.happy=function(){
	console.log("MM");
}
var yourName="reader";
function love(){
	console.log("mm vs gg");
}

1.name,happy 通过调用exports的，可见方法和属性只有name和happy
2.yourName,love没有设置exports,无法返回给外部调用者require  所以不可见

exports与module.exports的关系？
	1.module.exports包含exports,exports不能代替module.exports
	2.exports是给module.exports添加属性和方法
	3.module.exports方法单独返回一个数据类型。
	4.module.exports相当于require返回的对象，也就是所有require返回的对象，两者实质上结果相同.
	name.js：
		module.exports=['danhuang','is','my','name'];
		// array数组
	show.js
		var msgArr=require('./name.js');
		console.log(msgArr.join(' '));
		//danhuang is my name
	4.exports只能返回一个object对象
	name.js
		exports.say=['danhuang','is','my','name'];
	show.js
		var msgArr=require('./name.js');    //require是对象
		console.log(msgArr); 
		//{ say: [ 'danhuang', 'is', 'my', 'name' ] }

module对象：
console.log(module);
1.id
2.exports
3filename
4:parent
5.children
6.loaded：加载完毕
if(module.parent){
	//当前这个文件是被别的文件加载
}else{
	//入口文件
}

var module={};
module.exports={};
var exports=module.exports;
module3.js{
	exports=module.exports={}
}

内置模块清单：
path:          处理文件
fs             操作CRUD文件系统
child_process：新建子进程  用的比较少 硬件虚拟化采用
util: 		   提供一系列实用小工具实用工具
http: 		   提供HTTP服务功能
url: 		   用于解析url
querystring:   解析yrl中的查询字符串
crypto:        提供加密和解密功能