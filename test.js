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

	$.fn.shadow.defaults = {
			copies:5,
			opacity:0.1,
			copyOffset:function(index){
				return {x:index,y:index};
			}
		};
})(jQuery);