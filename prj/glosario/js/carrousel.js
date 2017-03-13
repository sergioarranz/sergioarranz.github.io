$(document).ready(function(){
	$('#divIzquierda').click(function(){
		$('#divCentro ul').prepend($('#divCentro ul  li:last'));
	});
	$('#divDerecha').click(function(){
		$('#divCentro ul').append($('#divCentro ul  li:first'));
	});
});