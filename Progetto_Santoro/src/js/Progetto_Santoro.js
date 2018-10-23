


function rimuoviCookie(){
	

	var element = document.getElementById("cookie");
	element.parentElement.removeChild(element);


}



primo.addEventListener("click",function(){
	
	if(primo.className == "like_bottom")
		primo.className="like_bottom_green";
	else
		primo.className="like_bottom";
	
	
	
});

secondo.addEventListener("click",function(){
	
	if(secondo.className == "like_bottom")
		secondo.className="like_bottom_green";
	else
		secondo.className="like_bottom";
	
	
	
});

terzo.addEventListener("click",function(){
	
	if(terzo.className == "like_bottom")
		terzo.className="like_bottom_green";
	else
		terzo.className="like_bottom";
	
	
	
});

quattro.addEventListener("click",function(){
	
	if(quattro.className == "like_bottom")
		quattro.className="like_bottom_green";
	else
		quattro.className="like_bottom";
	
	
	
});
