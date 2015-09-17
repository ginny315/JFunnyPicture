/*(function($){
	$.fn.swapClass = function(class1,class2){
		return this.each(function(){
			var $element = $(this);
			if($element.hasClass(class1)){
				$element.removeClass(class1).addClass(class2);
			}else if($element.hasClass(class2)){
				$element.removeClass(class2).addClass(class1);
			}
		})
	}
})(jQuery);
*/
(function($){	
	$.fn.shadow = function(opts){
		var options = $.extend({},$.fn.shadow.defaults,opts);
		 console.log(options);
		return this.each(function(){
			var $element = $(this);
			for(var i=0 ; i<options.len ; i++)
			$element.clone().css({
				position:'absolute',
				left:i,
				top:i,
				opacity:options.opacity
			}).insertAfter('h1');
		console.log("ok");
		});
	}

	$.fn.shadow.defaults = {
			len:5,
			opciaty:0.2
	}
})(jQuery);