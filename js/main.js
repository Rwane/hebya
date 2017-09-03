$(function(){

	particlesJS.load('particles-js', 'particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

   $("#sticker").sticky({topSpacing:0});

	$(".button1").click(function() {
		$('html,body').animate({
	      scrollTop: $("#second").offset().top},'slow'); 
	});
	$(".button2").click(function() {
    	$('html,body').animate({
        scrollTop: $("#third").offset().top},'slow');
	});
	$(".button3").click(function() {
    	$('html,body').animate({
        scrollTop: $("#fourth").offset().top},'slow');
	});
	$(".button4").click(function() {
    	$('html,body').animate({
        scrollTop: $("#fifth").offset().top},'slow');
	});
	$(".button5").click(function() {
    	$('html,body').animate({
        scrollTop: $("#first").offset().top},'slow');
	});
});