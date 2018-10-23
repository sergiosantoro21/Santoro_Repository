    function calc_addizione() {
        let num1 = Number(document.querySelector("#num1").value);
        let num2 = Number(document.querySelector("#num2").value);
        let sum = num1 + num2;
        document.getElementById("sum").value = sum;
    }
	
	    function calc_sottrazione() {
        let num1 = Number(document.querySelector("#num3").value);
        let num2 = Number(document.querySelector("#num4").value);
        let sott = num1 - num2;
        document.getElementById("sottrazione").value = sott;
    }
	
	    function calc_moltiplicazione() {
        let num1 = Number(document.querySelector("#num5").value);
        let num2 = Number(document.querySelector("#num6").value);
        let mul = num1 * num2;
        document.getElementById("moltiplicazione").value = mul;
    }
	
	    function calc_divisione() {
        let num1 = Number(document.querySelector("#num7").value);
        let num2 = Number(document.querySelector("#num8").value);
        let div = num1 / num2;
        document.getElementById("divisione").value = div;
    }