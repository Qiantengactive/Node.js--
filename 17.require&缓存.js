****require 越详细优先级越高
require不仅仅可以载入js模块 也可以载入json对象(大部分情况用于加载文本信息);
1.相同名字 aa.js aa.json aa.node
先加载js  js文件不存在加载json  json不存在加载node 
eg:
  dir ++module
 dir  |  ++module5
 file | 	--a.json
 file | 	--a.js
 file | 	--a.node
 file --try.js

 		a.js:
 				module.exports={name:"我是a.js"}
 		try.js
 		var  modu=require('./module/module5/a')
 		console.log(modu)==>{name:"我是index.js"}
2.加载的都不存在时候 保存
3.加载的文件夹 
	如果不存在package.json的话或者package.json文件没有引用js	会加载文件夹里面的index.js
	如果存在的package.json中的main引用指向js文件 优先加载package.json文件man指向的js文件
eg:
			1.
			 dir ++module
			 dir |  ++module5
			 file| 	  --a.js
			 file| 	  --b.js
			 file| 	  --index.js
			 file--try.js
			 		加载index.js

			 		index.js:
			 				module.exports={name:"我是index.js"}
			 		try.js
			 		var  modu=require('./module/module5')
			 		console.log(modu)==>{name:"我是index.js"}
			2.
			 dir ++module
			 dir |  ++module5
			 file| 	  --a.js
			 file| 	  --b.js
			 file| 	  --index.js
			 file|    --default.js
			 file|    --package..json
			 file--try.js 
			 		加载index.js

			 		index.js:
			 				module.exports={name:"我是index.js"}
			 		default.js:
			 				module.exports={name:"我是dafault.js"}
			 		package.json
			 		{
			 			"main":dafault.js
			 		}
			 		try.js
			 		var  modu=require('./module/module5')
			 		console.log(modu)==>{name:"我是dafault.js"}
4.模块名重复 系统模块的优先级最高
加载当前目录模块使用"./aa.txt"
var   aa=require('./aa.txt')

var fs=require('fs');
node_modules包底下的文件不用写./ 直接引用 
本文件夹存在使用本文件夹node_modules 不存在就向上查找 本文件的优先级最高
		 dir ++node_modules
		 file| 	  --a.js
		 file| 	  --b.js
		 file| 	  --index.js
		 file--try.js
		 		加载index.js

		 		index.js:
		 				module.exports={name:"我是index.js"}
		 		try.js
		 		var  modu=require('index')
		 		console.log(modu)==>{name:"我是dafault.js"}



./或者../按照相对路径从当前文件所在文件夹开始寻找
	-require('..file.js')
	=>从上级目录下找file.js文件
/开头  则以系统根目录开始寻找模块 读文件
	-require('/users/iceStone/Documents/file.js');
	=>以绝对路径的方式找
	部分源码:
	function $require(id){
		// 1.先找到文件 如果文件不存在 Cannot find  module
		// 2.读取文件内容 内容是js代码
		const fs=require('fs');
		const path=require('path');
		// 要加载的js完整路径
		const filename=path.join(__dirname,id);
		// 返回文件存在文件夹
		const dirname=path.dirname(filename);

		let code=fs.readFileSync(__dirname+id,"utf8");
		// 3.执行代码
		let module={id:filename,exports:{}};
		let exports=module.exports;
		code='(function($require,module,exports,__dirname,__filename){${code}})($require,module,exports,__dirname,__filename)'
		// 4.返回值
	}
****缓存机制
a.如何实现缓存 (验证缓存机制)
	dir ++module
	file| 	--a.js
	file| 	--b.js
	file| 	--index.js
	file--try.js
			1try.js
			setInterval(function(){
				var date=require('module/date.js');
				console.log(date.getTime());
			},1000);
			2.date.js
			module.exports=new Date();
			3.date2.js  暴露行为 每次更新时间 刷新缓存
			module.exports=()=>{
				console.log("date module exec");
				return new Date();
			}
b.如何删除缓存 很少清理缓存
reuqire.cache 获取缓存
遍历 并删除值 键不删除
Object.key(reuqire.cache).forEach((key)=>{
	delete reuqire.cache[key];
})
