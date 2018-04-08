/*Actual AI code*/
// No actual code.
//It will be triggered when the user types the function into the console

function trigger_AI(){
	function initialize_AI(){
		var percentnumber = 0;
		var wholePercentageCalculation = percentnumber + "%";
		setInterval(
			function(){
				for(percentnumber < 101; percentnumber + 1;){
					console.log(wholePercentageCalculation);
					document.querySelector(".percentage").innerHTML=wholePercentageCalculation;
				}
			},
			500
		);
	}
}
