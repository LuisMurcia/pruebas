$(document).ready(function(){

	$.getJSON('https://rawgit.com/IsmaFuentes/pruebas/master/b.json', function(data) {

		$.each(data, function(id, value){
			$("#propietarios").append('<option name="'+ id +'">'+value.nombre+'</option');
		});

	});

});


