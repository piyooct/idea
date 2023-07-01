function calcKakuritu(){
	var a1 =document.getElementById('keizoku').value;
	var a2 =document.getElementById('renchan').value;
	if (isNaN(parseInt(a1))) {
		a1=0
	} else if( a1 > 100){
		a1 = 100;
	}
	if (isNaN(parseInt(a2))) {
		a2=0
	} else {
		a2 = parseInt(a2);
	}
	document.getElementById('keizoku').value = a1;
	document.getElementById('renchan').value = a2;
	var i;
	var kekka = a1;
	for(i = 1; i < a2; i++){
		if (a2 == 0){
			break;
		}
		kekka = kekka * (a1 /100);
	}
	document.getElementById('kakuritsu').value = Math.round(kekka *1000000)/1000000;
}