function calcHitRate(){
	var b1 =document.getElementById('bunshi').value;
	var b2 =document.getElementById('bunbo').value;
	var b3 =document.getElementById('kaitensu').value;

	if (isNaN(parseInt(b1))) {
           b1=1;
           document.getElementById('bunshi').value = b1;
	}

	if (isNaN(parseInt(b2))) {
          document.getElementById('ataranai').value = "";
          document.getElementById('ataru').value = "";
          document.getElementById('bunbo').value = "";
          return false;
	} 

	if (isNaN(parseInt(b3))) {
          document.getElementById('ataranai').value = "";
          document.getElementById('ataru').value = "";
          document.getElementById('kaitensu').value = b3;
          return false;
	} else {
          b3 = parseInt(b3);
    }

    document.getElementById('bunbo').value = b2;
    document.getElementById('kaitensu').value = b3;

    var rate = 1-(b1/b2);
    var result = (rate**b3)*100;
    var ataranaiResult = Math.round(result*100000)/100000;
    var ataruResult = Math.round((100-ataranaiResult)*100000)/100000;
    document.getElementById('ataranai').value = ataranaiResult ;
    document.getElementById('ataru').value = ataruResult;
}