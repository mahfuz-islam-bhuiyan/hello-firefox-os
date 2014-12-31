$(document).ready(function(){
	$("#btnStoreData").on('click',function(){
		storeData();
	});

	$("#btnViewData").on('click',function(){
		viewData();
	});

	inputKey = "input_key";
	function storeData(){			
		noteValue = $("#noteValue").val();

		if (window.localStorage) {
			localStorage.setItem(inputKey, noteValue);
			alert("Your note has been saved");
		}
	}

	function viewData(){

		val = localStorage.getItem(inputKey);
		$("#storedData").html("Stored Data: " + val);

	}
	
	function clearData(){
		localStorage.clear();
	}
	
});