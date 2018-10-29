

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
			var template = "<h2>{{Titolo}}</h2>"+
											"<img src={{Immagine}} alt=prima foto>"+
											"<span class=badge badge-primary> {{Tech}} </span>"+
											"<p>{{Paragrafo}}</p>"+
											"<button type=button class=btn btn-default>{{Like}}</button>"; 

			var html;
			for(var i=0;i<result.length;i++){
				html = M.to_html(template, result[i]);
				$('#'+(i+1)).html(html);
			}


  	},
  // ed una per il caso di fallimento
  	error: function(){
    	alert("Chiamata fallita!!!");
  	},



		complete: function(){
			$('.btn, .btn-default').on('click', event =>{
				$(event.currentTarget).toggleClass('btn-whatever');
			});
		}

	});
});
