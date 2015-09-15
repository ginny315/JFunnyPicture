//立即调用的函数表达式
//扩展全局jQuery对象
//调用$.a()
 // $.extend({
 // 	a:function(){},
 // 	b:function(){}
 // })
 // 
 // 
//使用命名空间隔离函数
//为全局函数创造了一个命名空间
//可以选择一个自己的全局对象，避免自定义插件与第三方插件发生命名冲突
//调用$.JFunnyPicture.a()
//
// （function($){
// 	$.JFunnyPicture = {
// 		a:function(){},
// 		b:function(){}
// 	}
// }）(jQuery);
// 
// 添加jQuery对象方法
//jQuery.fn.JFunnyPicture = function(){}
(function($){
	$.fn.JFunnyPicture = function(){

	}
})

 //jQuery选择符可能会匹配0，1或多个元素，要全部匹配，this.each()进行隐式迭代
 //在对象方法体内，this引用的是第一个jQuery对象，在each中，this引用的是一个DOM元素
 //可以把return this.each()进行方法连缀

 

