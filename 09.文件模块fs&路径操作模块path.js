文件模块FileSystem
注意
*****所有的文件操作都是绝对路径 因为太长采用__dirname
require('fs')模块
同步
异步方式

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

文件上传：

路径操作模块：
	1.路径操作过程中，都必须使用物理路径(绝对路径)
	2.path模块api
		var path=require('path');
		1).path.join([p1],[p2],[p3]....)==>p1/p2/p3  连接多个路径  join没有定义实参 使用arguments拿到的
		拼合路径
		eg:
			id=》bb.txt
			__dirname==>c:aa     aa是文件夹名称
			id=>bb.txt
			path.join(__dirname,id)==>c:aa\\bb.txt;
			path.join(__dirname,'..','./temp','a','../../1.txt');


		2).path.dirname('c:aa\\bb.txt');==>c:aa      获取文件夹路径
		3).path.basename('c:aa\\bb.txt')==>bb.txt	 获取文件名(包含格式)
		4).path.basename('c:aa\\bb.txt','.txt')==>bb  获取文件名删除扩展名(不包含格式)
		5).path.extname(p.txt) 		p.txt==>.txt	 获取文件后缀名(包含点.)
		6).path.format(obj)和path.parse(pathString)           获取文件
			a.path.parse(pathString)
			 将一个路径字符串转换为一个对象(包含文件目录 文件名 扩展名)
			b.path.format(obj)   					 将对象转换为字符串
		7).path.relative(from ,to)                   获取从from到to的相对路径
		8).path.delimiter    						 获取不同操作系统中默认的路径分割符路径分隔符  window是; linux 是：
		9).process.env.Path 						 获取环境变量
       10).path.isAbsolute(temp);
		   path.relative(from,to);
	   11).path.normalize(p);  						 常规化一个地址
	   12)path.resolve([from....],to); 				 可以切换盘符
	   13).path.sep                                	 获取当前操作系统中默认用的路径成员分隔符 windos:\ linux ：
	   14).path.win32 								 指代win系统  允许在任意操作系统上使用windows的方式操作路径
       15).path.posix   							 允许在任意操作系统上使用linux的方式操作路径


13).

*readline 用于读取大文本文件 一行一行读
		fs-extra(第三方文件)
  process.env.Path.split(path.delimiter)获取环境变量;
	[ 'C:\\Program Files\\Java\\jdk1.7.0_17\\bin',
	  '%JAVA_HOME\\jre\\bin',
	  'C:\\Windows\\system32',
	  'C:\\Windows',
	  'C:\\Windows\\System32\\Wbem',
	  'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\',
	  'D:\\software\\quicktime\\QTSystem\\',
	  'C:\\Program Files\\nodejs\\',
	  'C:\\Users\\QT\\AppData\\Roaming\\npm',
	  'D:\\software\\vscode\\Microsoft VS Code\\bin' ]


	parse:
	    var path=require('path');
		var temp=path.join(__dirname,"aaa.txt");
		console.log(temp);
		console.log(path.parse(temp));

		E:\Nodejs\day5\day02\path>node parse.js
		E:\Nodejs\day5\day02\path\aaa.txt
		{ root: 'E:\\',
		  dir: 'E:\\Nodejs\\day5\\day02\\path',
		  base: 'aaa.txt',
		  ext: '.txt',
		  name: 'aaa' }
	format:
		var obj={ root: 'E:\\',
		  dir: 'E:\\Nodejs\\day5\\day02\\path',
		  base: 'aaa.txt',
		  ext: '.txt',
		  name: 'aaa' };
		console.log(path.format(obj));
	isAbsolute
		console.log(path.isAbsolute(temp));
		console.log(path.isAbsolute('../temp/1.txt'));

	path.normalize(p);  常规化一个地址
		var a=path.normalize('C://dev\\abc//cba////1.txt');  常规化一个地址
		==>C:\dev\abc\cba\1.txt
	path.relative(from ,to);  获取to相对from的相对路径
	   console.log(path.relative('C:\dev\abc\zzz','C:\dev\abc\zzz\cba\1.txt'))
	path.resolve([from....],to); 可以切换盘符
		console.log(path.resolve(__dirname,'..','./','./code'));
		console.log(path.resolve('./code'));以当前目录开始
		eg:
		var path=require('path');
		console.log(path.resolve(__dirname,'..','./','./code'));
		E:\Nodejs\day5\day02\code
		console.log(path.resolve('./code'));
		// 以当前目录开始
		E:\Nodejs\day5\day02\path\code
		注意：与join不同  切换盘符
		console.log(path.resolve(__dirname,'c:dev/..','./','./code'));
	path.sep
		获取当前操作系统中默认用的路径成员分隔符 windos:\ linux ：/
		console.log(path.sep);
    path.win32 指代win系统  允许在任意操作系统上使用windows的方式操作路径
	    path===path.win32  ///true
	    var p={
	    	win32:null
	    };
	    p.win32=p;
	    console.log(p==p.win32);//true
    path.posix   允许在任意操作系统上使用linux的方式操作路径

