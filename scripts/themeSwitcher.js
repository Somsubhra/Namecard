$(function() { 
	$("#themeSwitcher").click(function(){
			if($("#themeSwitcher").html()=="Lights Off!"){
				$("#style").attr("href","style/negativeStyle.css");
				$("#themeSwitcher").html("Lights On!");
			}
			else{
				$("#style").attr("href","style/positiveStyle.css");
				$("#themeSwitcher").html("Lights Off!");	
			}
	});
});