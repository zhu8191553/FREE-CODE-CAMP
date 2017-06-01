//window.onload=function(){
//	
//}
	$(function() {
		$('#search0').click(function() {
			$(this).fadeOut();
			$('#searchbox').fadeIn();
			$('#searchbox').css('width','0px');
			$('#searchbox').animate({
				'width': '300px'
		});
	})
		var oSearchbox=document.getElementById('searchbox');
		
			
			$('#searchbox').keyup(function(){
				if (oSearchbox.value!="") {
					var myQuery = document.getElementById('searchbox').value;
					var searchAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + myQuery + "&namespace=0&callback=?";
					$(".result").html("");
					$.getJSON(searchAPI, function(json) {
						for(i = 0; i < json[1].length; i++) {
							$('.result').append("<div class='well'><a href=" + json[3][i] + " target='_blank'>" + json[1][i] + "</a><p>" + json[2][i] + "</p></div>");
						}
					});
				}
			})
		
	
});

















