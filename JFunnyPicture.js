// $(document).ready(function(){
// 	 	 	 $('img').on("mouseover",function(){
// 	 	 	 	 var that = this;
// 	 	 	 	 $(that).css('position','absolute');
// 	 	 	 	 var width = that.width/2;
// 	 	 	 	 var height = that.height/2;
// 	 	 	 	 $('<div></div>').addClass('one_cover_'+i).css({
// 	 	 	 	 	position: 'absolute',
// 					width: width,
// 					height: height,
// 					backgroundColor: '#000',
// 					opacity: 0,
// 					zIndex :'9999'
// 	 	 	 	 }).delay(1000).animate({
// 	 	 	 	 	opacity: 0.3,
// 	 	 	 	 },3000).insertAfter($(this).parent());
	 	 	 	 
// 	 	 	 })
// });


(function($){
	$.fn.JFunnyPicture = function(opts){
		var options = $.extend({},$.fn.JFunnyPicture.defaults,opts);
		return this.each(function(){
			$(this).on('mouseenter',function(){
				var that = this;
	 	 	 	 //$(that).css('position','absolute');
	 	 	 	 var n = Math.sqrt(options.n);
	 	 	 	 var width = that.width/n;
	 	 	 	 var height = that.height/n;
	 	 	 	 for(var i=1,j=options.n+1 ; i<j ; i++){
	 	 	 	 		console.log(i);
		 	 	 	 $('<div></div>').addClass('one_cover_'+i).css({
		 	 	 	 	
		 	 	 	 	position: 'absolute',
						width: width,
						height: height,
						left:(i+n-1)%n*width,
						top:Math.floor((i-1)/n)*height,   
						backgroundColor: '#000',
						opacity: 0,
						zIndex :'9999'
		 	 	 	 }).delay(0).animate({
		 	 	 	 	opacity: 0.1*i,
		 	 	 	 },500).insertAfter($(this));
	 	 	 	 }
			});
		});
	}

	$.fn.JFunnyPicture.defaults = {
			n:4
	}
})(jQuery);