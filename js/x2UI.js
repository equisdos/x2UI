/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*	x2UI v1.0 | GPL 2003 equisdos | www.equisdos.com
//	Autores:
//			- Eugenio Lacuesta
//			- Camilo Pifano
*/
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Creacion de nuevos input checkbox*/
	$('input.x2:checkbox').each(function(){
		var IDCheck = $(this).attr('id');
		$(this).after('<label for="' + IDCheck + '"></label><label class="error" generated="true" for="' + IDCheck + '"></label>');
	});
	
	/*Creacion de nuevos input radio*/
	$('input.x2:radio').each(function(){
		var IDRadio = $(this).attr('id');
		$(this).after('<label for="' + IDRadio + '"></label><label class="error" generated="true" for="' + IDRadio + '"></label>');
	});
	
	/*Creacion de nuevos input file*/
	$('input.x2:file').each(function(){
		var IDFile = $(this).attr('id');
		var Texto = $(this).attr('text');
		var NombreBoton = $(this).attr('placeholder');
		$(this).before('<input id="FW' + IDFile + '" type="text" class="x2" for="' + IDFile + '" readonly="true" value="' + Texto + '" /> <label class="error" generated="true" for="' + IDFile + '"></label>');
		$(this).wrap('<div class="input-file">' + NombreBoton + '</div>');
		
		/*Controlar evento de cambio de contenido*/
		$(this).change(function(){
			var Valor = $(this).val();
			$('#FW' + IDFile).val(Valor);
		});
		
		/*Ejecutar evento desde el nuevo input*/
		$('#FW' + IDFile).click(function(){ $('#' + IDFile).click(); });
	});
	
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/