https://zhufengnodejs.github.io/doc/index.html

pwd       显示当前目录路径
cd        进入某个文件夹
ls和dir： 显示当前目录下的文件   查看当前目录列表（directory）
pwd：显示当前目录    'save Gram'
mkdir  创建文件夹
cls clear  cls
del  rm   	删除
echo "aaa"  控制台输出到文件
echo 		"aa">> 1.txt
node -v >> 2.txt 
cat 		查看文件内容
wget    下载
echo  'hello' >>1.txt  输出到1.txt
cat   1.txt查看
tree 目录树 win下
npm ls


- 切换当前目录（change directory）：cd
- 创建目录（make directory）：mkdir
- 查看当前目录列表（directory）：dir
  + 别名：ls（list）
- 清空当前控制台：cls
  + 别名：clear
- 删除文件：del
  + 别名：rm
解压tar.xz文件：
	1) xz -d xxx.tar.xz 将 xxx.tar.xz解压成 xxx.tar 
	2) tar xvf xxx.tar来解包。
解压tar.gz文件
    tar zxf   xxxxxx.tar.gz文件
cat 2.


发现了npm的安装命令：
curl -L https://npmjs.org/install.sh | sh


区别
atime  access time
ctime  change time
mtime  modify time
1.更改文件内容  才会更新mtime 
2.改名字 改属性更新ctime
3.每次查看一次更新一次