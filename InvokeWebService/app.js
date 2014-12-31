$(document).ready(function(){


	$("#btnSearch").click(function(){

		var xhr = new XMLHttpRequest({mozSystem: true});
		xhr.open("GET", "http://bhoganti.com/api/brand/search?keyword=nascenia", true);

		xhr.onreadystatechange = function() {

			if (xhr.readyState == 4) {
				obj = JSON.parse(xhr.responseText);
				brand = obj.brands;
				result = "<li>Brand: " + brand[0].name + "</li>";
				result += "<li>Id: " + brand[0].id + "</li>";
				result += "<li>Avg Rating: " + brand[0].average_rating + "</li>";
				result += "<li>Number of Comments: " + brand[0].number_of_comments + "</li>";
				
				$("#searchResults").html(result);
				$('#searchResults').listview('refresh');
			}
		}
		xhr.send();

	});
});