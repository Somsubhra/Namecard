$(function() { 

	$('#body').load('html/about.html');
	
	$("#about").click(function() {
       $('#body').load('html/about.html');
   	});
	    
   	$("#socialize").click(function() {
       $('#body').load('html/socialize.html');
   	});
   
   	$("#snaps").click(function(){
	   	$('#body').load('html/snaps.html');
	}); 
	
	$("#contact").click(function(){
	   	$('#body').load('html/contact.html');
	});
	
});