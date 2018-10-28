    function verifica_nome() {
		let name = document.querySelector("#name").value;
		var name_vector = ["marco","rocco","sergio"];
		var trovato=0;
		for(var i=0;i<name_vector.length && trovato==0;i++){
			if(name_vector[i]==name)
				trovato=1;
		}
	
		if(trovato==1)
			document.getElementById("fine").innerHTML = "Nome presente nel db";
		else
			document.getElementById("fine").innerHTML = "Nome non presente nel db";
    }