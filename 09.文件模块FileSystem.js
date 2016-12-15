文件模块FileSystem
注意
*****所有的文件操作都是绝对路径 因为太长采用__dirname
require('fs')模块
同步
异步方式
***文件操作
1.重命名文件 异步调用
	fs.rename(__dirname+"/aaa.txt",__dirname+"/bbb.txt",function (err) {
			if(err) throw err;
			console.log('renamed complete')
	})
	同步调用
	fs.renameSync(path1,path2)
2.修改文件权限和文件权限属组
	1>.fs.chmod(path,mode,[callback])  ==>修改文件权限
	2>.fs.chmod(path,uid,gid,[callback])
		uid==>user
		gid==>group
	3>.获取元素信息    fs.stat(path,[callback]);
	eg:
	var BASE_DIR=__dirname;
	var fs=require('fs');
	fs.stat(BASE_DIR+'/aaa.txt',function (err,stats) {
		if(err) throw err;
		console.log(stats);
	})
	注意：stats是fs.stats的对象
4>.读取数据
    fs.readlfile(path,[callback])  解析读取文件数据
5>.判断文件是否存在
	fs.exists(path,[callback])判断文件是否存在
	fs.existsSync(path)  ==>返回布尔类型exists
	var BASE_DIR=__dirname;
	var fs=require('fs');
	fs.exists(BASE_DIR+'/aaa.txt',function (existBool) {
	    if(existBool){
	        console.log('aa.txt is exist');
	    }else{        console.log('aa.txt is not exist');
	    }
	});
6>.删除文件
	fs.unlink(path,[callback])删除文件
	fs.unlinkSync(path)删除文件
	var BASE_DIR=__dirname;
	var fs=require('fs');
	fs.unlink(BASE_DIR+'/aaa.txt',function (err) {
	    if(err) throw err;
	})
7>.文件读写 
	fs.write(fd,buffer,offset,length,position,function(err,writtern))
	fd文件
	position:写入文件从头算起的偏移位置
	fs.read(fd,buffer,offset,length,posotion,function (err,bytesRead) {
		// body...
	})
	bytesRead:为多少字节被读取
	buffer:new buffer()创建
8>.获取文件信息
	fs.stat(path,callback(err,stats));
	fs.statSync(path) ==>返回fs.stats的实例
9>.移动文件
	fs.rename(oldPath,newPath);

***文件上传：

***Path总结：
	path模块api
	var path=require('path');
	path.dirname('c:aa\\bb.txt');==>c:aa
	path.basename('c:aa\\bb.txt')==>bb.txt
	path.basename('c:aa\\bb.txt','txt')==>bb
	拼合路径
	id=》bb.txt
	__dirname==>c:aa\\bb.txt
	path.join(__dirname,id)==>c:aa\\bb.txt;

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