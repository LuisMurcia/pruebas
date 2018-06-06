$(document).ready(function(){

	$.getJSON('propietarios.json',function(data) {
		$.each(data, function(id,value){
			$("#usuarios").append('<option name="'+ id +'">'+value+'</option');
		});
	});

});


/*
window.onload = function(){
	$.getJSON('propietarios.json',function(data) {
		$.each(data, function(id,value){
			$("#usuarios").append('<option name="'+ id +'">'+value+'</option');
		});
	});
}*/