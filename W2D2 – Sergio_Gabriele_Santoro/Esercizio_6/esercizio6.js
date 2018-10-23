    

	
	function random_color() {
		var s ="0123456789ABCDEF";
		var x="#";

		for(var i=0;i<6;i++){
			x=x+s[Math.floor(Math.random()*16)]
			
		}			

		return x;

		
		
    }
	
	function change_color(){
		document.bgColor=random_color();
		
	}
	var id=window.setInterval(change_color,15000);
	function stop(){
		clearInterval(id);
	}
	
	function start(){
		id=window.setInterval(change_color,15000);
	}