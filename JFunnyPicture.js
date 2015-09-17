$(document).ready(function(){
	 	 	 $('img').on("mouseover",function(){
	 	 	 	 var that = this;
	 	 	 	 $(that).css('position','absolute');
	 	 	 	 var width = that.width/2;
	 	 	 	 var height = that.height/2;
	 	 	 	 $('<div></div>').addClass('one_cover_1').css({
	 	 	 	 	position: 'absolute',
					width: width,
					height: height,
					backgroundColor: '#000',
					opacity: 0,
					zIndex :'9999'
	 	 	 	 }).delay(1000).animate({
	 	 	 	 	opacity: 0.3,
	 	 	 	 },3000).insertAfter($(this).parent());

	 	 	 	 $('<div class="one_cover_2"></div>').css({
	 	 	 	 	position: 'absolute',
					width: width,
					height: height,
					left:width,
					backgroundColor: '#000',
					opacity: 0,
					zIndex :'9999'
	 	 	 	 }).delay(1000).animate({
	 	 	 	 	opacity: 0.5,
	 	 	 	 },3000).insertAfter($(this).parent());

	 	 	 	 $('<div class="one_cover_3"></div>').css({
	 	 	 	 	position: 'absolute',
					width: width,
					height: height,
					top:height,
					backgroundColor: '#000',
					opacity: 0,
					zIndex :'9999'
	 	 	 	 }).delay(1000).animate({
	 	 	 	 	opacity: 0.5,
	 	 	 	 },3000).insertAfter($(this).parent());

	 	 	 	 $('<div class="one_cover_4"></div>').css({
	 	 	 	 	position: 'absolute',
					width: width,
					height: height,
					left:width,
					top:height,
					backgroundColor: '#000',
					opacity:0,
					zIndex :'9999'
	 	 	 	 }).animate({
	 	 	 	 	opacity:0.8
	 	 	 	 },3000).insertAfter($(this).parent());
	 	 	 })
	 	 });