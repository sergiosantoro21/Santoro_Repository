    function calcola_quadrato() {
		let num = Number(document.querySelector("#num").value);
		var a=[];
		
		for(var i=0;i<num;i++){
			a[i]= (i*i)+'<br>';
			}
	
		
		document.getElementById("fine").innerHTML = a;
    }