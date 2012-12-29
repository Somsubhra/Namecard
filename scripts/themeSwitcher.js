$(function() { 
	$("#themeSwitcher").click(function(){
			if($("#themeSwitcher").html()=="Off"){
				$("#style").attr("href","style/negativeStyle.css");
				$("#themeSwitcher").html("On");
			}
			else{
				$("#style").attr("href","style/positiveStyle.css");
				$("#themeSwitcher").html("Off");
				
			}
	});
});