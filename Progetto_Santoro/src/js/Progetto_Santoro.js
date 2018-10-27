

const $=require('jquery');


$("#cookie").click(function () {
	$(this).hide();
});

 $(".btn-default").click(function () {
     if($(this).hasClass("btn-default"))
          $(this).removeClass("btn-default").addClass("btn-whatever");
	else
		$(this).removeClass("btn-whatever").addClass("btn-default");
});


$(document).ready(function(){
	$.ajax({
  // definisco il tipo della chiamata
  	type: 'GET',
  // specifico la URL della risorsa da contattare
  	url: 'file.json',

		dataType: 'json',
  // passo dei dati alla risorsa remota

  	success: function(result){
			var str='';
			for(var i=0;i<result.length;i++){
				str+=result[i].text;
			}
		$('#sezione').html('<p>'+str+'</p>');

  	},
  // ed una per il caso di fallimento
  	error: function(){
    	alert("Chiamata fallita!!!");
  	}
	});
});


/*
$(document).ready(function(){
$('#button_send').on('click', function () {
$.ajax({
    type: 'POST',
    url: 'agenda.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
        $( "#send" ).remove();
        $.each(data, function(index, element) {
            $('body').append($('<div>', {
                text: element.Nome + " " + element.Cognome
            }));
        });
    }
});
});
});
*/
