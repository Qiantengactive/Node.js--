单线程
异步
非阻塞
事件驱动
const a=10;
a=20//报错
const b={c:10}
b.c=20//正确

let局部变量作用域
const   常量
babeljs.io

同步调用和异步调用
	同步调用
		同步调用时一种阻塞式调用
	异步调用：
		1.一种非阻塞式调用  一段代码未执行完毕，可以继续执行下一段代码
		2.代码执行完毕，通过回调函数返回继续执行相应的逻辑，而不耽误其他逻辑代码执行
	异步调用：
		function Person(){
			think 异步方法 异步等待思考5分钟 思考结束输出thinking--
			this.think=function(callback){
				// 定义Prrson对象的think方法
				setTimeout(
					function () {
						console.log("think--!");                     //2
						callback()
					}
				)
				this.answer=function(){
					// 定义Person对象的answer方法
					console.log("I am answering other question");   //1
				}
			}
		}

		var person=new Person();


		person.think(function(){
			console.log("thinking 5 second ,get the right answer");  //3
		});
		person.answer();

		/*
		I am answering other question
		think--!
		thinking 5 second ,get the right answer
		*/
 异步调用不等待think的思考结束，而是先执行下一段代码的调用模式
Nodejs拥有异步非阻塞特性，而不是说Nodejs中所有的代码逻辑都是异步执行的
取决于是否在代码逻辑中硬功其异步函数

回调和异步调用区别：
	1.回调并非异步
	2.回调是一种解决异步函数执行结果的处理方法
	3.异步调用：在异步调用时，通过回调的方法将执行结果返回到回调函数中，之后通过回调函数处理执行逻辑代码。
	4.回调调用还是一种阻塞式调用

	// 代码是一个回调逻辑 不是一个异步代码逻辑  并没有涉及异步调用接口

function waitFive(name,function_name){
	// 定义waitFive方法，该方法回调等待5s
	var pus=0; 
	var currentDate=new Date();
	while(pus<5000){
		// 等待5s
		var now=new Date();
		pus=now-currentDate;
	}

// 执行回调函数
	function_name(name);
//echo(danhuang)
}

function echo(name){
	// 定义回调函数echo()
	console.log(name);
}

waitFive("danhuang",echo);
console.log("its over");


1如果函数需要回调参数 一定是在参数的最后出现的
function getFileAsync(path,callback){
	if(错误){
		callback(new Error("xxxx错误"))；
	}else{
		callback(null,data);
	}
}
// *****回调函数一定作为参数的最后一个参数出现
function isEvenOrOdd(number,callback){
	if(typeof number==='number'){
		//奇数
		if(number%2){
			//奇数
			callback(null,'当前传入的是偶数')
		}else{
			callback(null,'当前传入的奇数')
		}
	}else{
		// throw new Error('你传入的不是数字')
		callback(new Error('你传入的不是数字'));
	}
}
// *****将约定错误作为回调函数的第一个参数
// 回调函数的第一个参数默认接受错误信息
// 第二个参数才是真正的回调数据（便于外界获取调用的错误情况）
isEvenOrOdd(7,function(err,data){
	if(err) throw err;
	console.log("7"+data);
})
isEvenOrOdd(8,function(err,data){
	if(err) throw err;
	console.log("8"+data);
})
isEvenOrOdd("+",function(err,data){
	if(err) throw err;
	console.log("string"+data);
})
因为之后的操作大多数都是异步的方式，无法通过try catch捕获异常 
so错误优先的回调函数 第一个参数为上一步的错误信息



Node异步操作  
Node采用Chrome V8引擎处理JavaScript脚本
V8单线程运行
Node大量采用异步操作   即任务不是马上执行，而是插在任务队列的尾
部，等到前面的任务运行完后再执行
Node错误优先
if(error) throw error;

异步回调的问题
do1(function(){
	do2(function(){
		do3(function(){
			do1();
		})
	})
})


回调函数与try catch捕获异常
这是因为回调函数主要用于异步操作，当回调函数运行时，前期的操作早结束
了，错误的执行栈早就不存在了，传统的错误捕捉机制try…catch对于异步操
作行不通，所以只能把错误交给回调函数处理。

异步调用缺点:
相比较传统代码
异步事件驱动的代码
1.不容易阅读
2.不容易调试
3.不容易维护


线程与进程
单核CPU
多线程之间共享某些数据很麻烦
创建线程耗费时间
线程数量有限
CPU在不同线程之间转换，有个上下文转换，这个转换非常耗时
单线程比多线程稳定
