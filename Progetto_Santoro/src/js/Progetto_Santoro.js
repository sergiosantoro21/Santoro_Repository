

const $=require('jquery');
const M=require('mustache');


$("#cookie").click(function () {
	$(this).hide();
});



$(document).ready(function(){
	$.ajax({
  // definisco il tipo della chiamata
  	type: 'GET',
  // specifico la URL della risorsa da contattare
  	url: '/articoli',

		dataType: 'json',
  // passo dei dati alla risorsa remota

  	success: function(result){
			var template=$('#template').html();
			var rendered=M.render(template,result);
			$('#articolo').html(rendered);
  	},
  // ed una per il caso di fallimento
  	error: function(){
    	alert("Chiamata fallita!!!");
  	},


		complete: function(){
			$('article .btn, .btn-default').on('click', function() {
			 myfunction($(this));
		 });
	 }
 });
});

function myfunction(self){

	//console.log('Log prima della chiamata:' + self.attr('data-like'));
  $.ajax({
    url: '/articles',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ id: self.attr('Id'), like: self.attr('data-like') }),
    success: function(result){
    //console.log('Log dopo della chiamata:' + result);
    if(result === 'ok'){
      self.toggleClass("btn-success")
      self.attr('data-like', result);
    }
		
      //  console.log('valore di data-like:' + self.attr('data-like'));

    },
    error: function(error){
      console.log("Errore insuccesso setLike:");
      console.log(error);
    }
  });
}
