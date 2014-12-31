$(document).ready(function(){	
	$('#btnFindDevice').on('click', function() {
	  findMyCurrentLocation();
	});
});
 

function findMyCurrentLocation(){
	var geoService = navigator.geolocation;
	if (geoService) {
		navigator.geolocation.getCurrentPosition(showCurrentLocation,errorHandler);
		$("#searchResults").html("Retriving the location...");
	} else {
		$("#searchResults").html("Your Browser does not support GeoLocation.");
	}
}

function showCurrentLocation(position){
	console.log("Latitude: " + position.coords.latitude + " , Longitude : " + position.coords.longitude);
	$("#searchResults").html("Your location details --> Current Latitude : " + position.coords.latitude + " , Longitude : " + position.coords.longitude);
}

function errorHandler(error){
	  $("#searchResults").html("Error while retrieving current position. Error code: " + error.code + ",Message: " + error.message);
}