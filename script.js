/* 
This is copied from CodeAcademy's exercise (https://www.codecademy.com/courses/web-advanced-en-x6JWW/3/2)
Mainly for my own studies in javaScript, JQuery
I have made some changes.

Can calculate addition, subtraction, division and multiply.
Has one stack.


*/


$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length < 9) {
            totaldiv.css({"font-size" : "60px"});
        };

        if (number.length > 9) {
            totaldiv.css({"font-size" : "39px"});
            if (number.length > 14) {
                 totaldiv.text(number.substr(number.length-14,14));
            };
        };
        if (number.length > 20) {
            number = "";
            totaldiv.text("Err");
        };
    };

    var number = "";
    var newnumber = "";
    var result;    
    var operator = "";
    var testComma = false; 
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall, #comma").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });

    // comma test 
    $("#comma").click(function(){
        if (testComma === false ) {
            testComma = true;
    		number += $(this).text();
        }
    });

    $("#operators a").not("#equals").click(function(){
        operator = $(this).text();
        testComma = false;
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });

    $("#clear,#clearall").click(function(){
        totaldiv.css({"font-size" : "60px"});
		number = "";
		totaldiv.text("0");
        testComma = false;
		if ($(this).attr("id") === "clearall") {
		newnumber = "";
		}
    });

    $("#equals").click(function(){
        testComma = false;
        // convert the strings to number
        number = parseFloat(number);
        newnumber = parseFloat(newnumber);
    	if (operator === "+"){
    	    result = (number + newnumber);
    	} else if (operator === "-"){
            result = (newnumber - number);
    	} else if (operator === "/"){
            result = (newnumber / number);
    	} else if (operator === "*"){
            result = (newnumber * number);
    	}

        // handle very big numbers and very small numbers
        if (result > 100000000 || result < 0.000001) {
            result = result.toExponential(6);
        }

        // convert number to string
    	totaldiv.text(result.toString(10));
            
        // catch error for errors in calculations
    	testNumLength(result);
            if (result !== "Err" || result !== "Infinity") {
               number = result;
            } else {
               number = "";
            }
        testComma = false;
    	newnumber = "";
    });
});
