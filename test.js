<<<<<<< HEAD
// (function($){
// 	$.fn.swapClass = function(class1,class2){
// 		return this.each(function(){
// 			var $element = $(this);
// 			if($element.hasClass(class1)){
// 				$element.removeClass(class1).addClass(class2);
// 			}else if($element.hasClass(class2)){
// 				$element.removeClass(class2).addClass(class1);
// 			}
// 		})
// 	}
// })(jQuery);

(function($){
	$.fn.shadow = function(opts){

		var options = $.extend(defaults,opts)

=======
/*(function($){
	$.fn.swapClass = function(class1,class2){
>>>>>>> 6ea64e1b346f8d67ff0e54fce05d39e81ed3f8e4
		return this.each(function(){
		var originalElement = $(this);
		for(var i=0 ; i<options.copies ;i++){
			var offset = options.copyOffset(i);

			$originalElement.clone().css({
				position:'absolute',
				left:$originalElement.offset().left+i,
				top:$originalElement.offset().top+i,
				margin:0,
				zIndex:-1,
				opacity:options.opacity
			}).appendTo('body');
		}//for
		});//return
	}
<<<<<<< HEAD

	$.fn.shadow.defaults = {
			copies:5,
			opacity:0.1,
			copyOffset:function(index){
				return {x:index,y:index};
			}
		};
=======
})(jQuery);
*/
(function($){	
	$.fn.shadow = function(opts){
		var options = opts | defaults | {};
		return this.each(function(options){
			var $element = $(this);
			for(var i=0 ; i<options.len ; i++)
			$element.clone().css({
				position:absolute,
				left:$element.offset().left+i,
				top:$element.offset().right+i,
				opciaty:options.opciaty

			})
		})
	}

	$.fn.shadow.defaults = {
			len:5,
			opciaty:0.2		
>>>>>>> 6ea64e1b346f8d67ff0e54fce05d39e81ed3f8e4
})(jQuery);





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
