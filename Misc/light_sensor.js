



window.addEventListener('devicelight', function(event) {

  var value = event.value;

  console.log(value);//Shows the current light value

  document.body.style.backgroundColor = value < 50 ? "#FFFFFF" : "#000000"



});