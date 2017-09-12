/* 
This is copied from CodeAcademy's exercise (https://www.codecademy.com/courses/web-advanced-en-x6JWW/3/2)
Mainly for my own studies in javaScript, JQuery
I have made some changes.

Can calculate addition, subtraction, division and multiply.
Has one stack.


*/


$(document).ready(function(){
// validering och klippa av strängen på rätt ställe vid input är inte helt klar
// får kanske tänka helt nytt.....
// Tar och använder mig av en array istället.

    var numberArray = [];
    var i;
    var number = 0;
    var newnumber = 0; 
    var result = 0;    
    var operator = "";
    var testComma = false; 
    var totaldiv = $("#total");
    totaldiv.text("0");

    $("#numbers a").not("#equals, #comma").click(function(){
  	   if(numberArray.length < 12)
            numberArray.push( Number($(this).text()) );
        i++;
        // present the array in calculators window
  		totaldiv.text(numberArray.join(""));
            number = Number(numberArray.join(""));
    });

    // comma test 
    $("#comma").click(function(){
        if (testComma === false ) {
            testComma = true;
    		numberArray.push( $(this).text() );
    		number += $(this).text();
        }
    });

    $("#operators a").not("#equals").click(function(){
        operator = $(this).text();
        testComma = false;
		newnumber = number;
		number = 0; 
        numberArray = [];
		totaldiv.text("0");
    });

    $("#clear,#clearall").click(function(){
        i = 0;
        numberArray = [];
		number = 0;
		totaldiv.text("0");
        testComma = false;
		if ($(this).attr("id") === "clearall") {
		newnumber = 0;
		}
    });

    $("#equals").click(function(){
        testComma = false;
    	if (operator === "+"){
    	    result = (number + newnumber);
    	} else if (operator === "-"){
            result = (newnumber - number);
    	} else if (operator === "/"){
            result = (newnumber / number);
    	} else if (operator === "*"){
            result = (newnumber * number);
    	}
// en del stora tal går utanför skärmen
// skall arbeta med en annan validering av längden  på strängen            
        if(result > 10000000 || result < 0.0000001){
    	    totaldiv.text(result.toExponential(6));
        } else {
    	    totaldiv.text(result.toPrecision(9));
        }
            
        testComma = false;
    	newnumber = 0; 
    });
});
