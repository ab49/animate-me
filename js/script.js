var animator= function(id){
	var img = document.getElementById(id);
	var i = 1;
	function animation(){
		j=i+2;
		if(j>5)j=1;
		k=j+2;
		if(k>5)k=1;
		img.childNodes[i].className = "animation-out";
		img.childNodes[j].className = "animation-in";
		img.childNodes[k].className = "";
		i+=2;
		if(i>5)i=1;
		
	}
	setInterval(function(){ animation(); }, 3100);
};
animator("img-wrapper");

var animator_top= function(id){
	var img = document.getElementById(id);
	var i = 1;
	function animation(){
		j=i+2;
		if(j>5)j=1;
		k=j+2;
		if(k>5)k=1;
		img.childNodes[i].className = "animation-top-out";
		img.childNodes[j].className = "animation-top-in";
		img.childNodes[k].className = "";
		i+=2;
		if(i>5)i=1;
		
	}
	setInterval(function(){ animation(); }, 3100);
};
animator_top("text-wrapper");