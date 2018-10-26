

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

function doAjax(){

	$.ajax({
		url: 'file.json',
		mathod: 'GET',
		success: function (result){
			var output='';
			for(var i=0;i<result.lenght;i++){
				output+=result[1].nome1;



			}
			$('#sezione').innerHTML(output);         
		}
	});


};
