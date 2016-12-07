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

	






