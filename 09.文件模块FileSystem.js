文件模块FileSystem


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

