function calcKakuritu(){
	var a1 =document.getElementById('hitRate').value;
	var a2 =document.getElementById('kokanRate').value;
	var a3 =document.getElementById('rollSu').value;
	var a4 =document.getElementById('rollSu_jitsu').value;
	var a5 =document.getElementById('rollSu_hour').value;

	if (isNaN(parseInt(a1)) || isNaN(parseInt(a2))
		|| isNaN(parseInt(a3)) || isNaN(parseInt(a4)) || isNaN(parseInt(a5)) ) {

		document.getElementById("expectPrice").value = "";
		document.getElementById("needPrice").value   = "";
		document.getElementById("profitPrice").value = "";
		document.getElementById("profitYen").value   = "";
		document.getElementById("hourPrice").value   = "";
		return;
	} 
	
	var kansan       = a2 / 4;
	var kansanBorder = a3 * kansan;
	var expectPrice  = 250 * (a1 / kansanBorder);
	var needPrice    = 250 * (a1 / a4);
	document.getElementById("expectPrice").value =  Math.round(expectPrice * 1000) / 1000;
	document.getElementById("needPrice").value   =  Math.round(needPrice  * 1000) / 1000;
	
	var diff      = (expectPrice - needPrice) / a1;
	var diffYen   = diff * a2;
	var hourPrice = diffYen * a5;

	document.getElementById("profitPrice").value = Math.round(diff * 1000) / 1000;
	document.getElementById("profitYen").value = Math.round(diffYen * 1000) / 1000;
	document.getElementById("hourPrice").value = Math.round(hourPrice * 1000) / 1000;
}