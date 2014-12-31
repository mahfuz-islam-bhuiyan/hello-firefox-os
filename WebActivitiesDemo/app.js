$(document).ready(function(){

	   $("#btnCall").click(function(){
	      var call = new MozActivity({
				name: "dial",
				data: {
					number: "+1231231231"
				}
			});
		});
	
	   $("#btnSMS").click(function(){
	      var newSMS = new MozActivity({
				name: "new",
				data: {
				    type : "websms/sms",
					number: "+1231231231"
				}
			});
		});
	
	
	   $("#btnPickImage").click(function(){
			var pickImageActivity = new MozActivity({
			name: "pick",
			data: {
			  type: ["image/png", "image/jpg", "image/jpeg"]
			  }
			});
			
			pickImageActivity.onsuccess = function() {
			  
			   var imageElement = $('<img id="image1" height="400" width="300">');
			   imageElement.attr('src', window.URL.createObjectURL(this.result.blob));
			   $("#viewImage").html(imageElement);

			   $.mobile.changePage ($("#showImagePage"));
			};
			
			pickImageActivity.onerror = function() {
			  alert("Cannot pick the image");
			  console.log(this.result);
			};
		});
			   	   
});