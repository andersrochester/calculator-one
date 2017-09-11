$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    var numOfDecs = function (a) {
        var i;
        var count = 0;
        for (i=0; i++; i <= a.length) {
            if (a[i] === ".") {
                count = count + 1;
            }
            return count;
        }
            
            
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    
    $("#operators a, #side a").not("#equals, #decimal").click(function(){
        if ($(this).text() === "sqrt") {
            operator = sqrt;
        } else {
            operator = $(this).text();
        }
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#decimal").click(function() {
        if (numOfDecs(number) === 0) {
          totaldiv.text(number);
          testNumLength(number);
        }
    });
    
    //Add your last .click() here!
    $("#equals").click(function(){
    	if (operator === "+"){
    		number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
    	} else if (operator === "-"){
    		number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
    	} else if (operator === "÷"){
    		number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
    	} else if (operator === "×"){
    		number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
    	}
    	totaldiv.text(number);
    	testNumLength(number);
    	number = "";
    	newnumber = "";
    });
});
