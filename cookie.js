
function getCookie(byname){
	byname=byname+"=";
	nlen = byname.length;
	fromN = document.cookie.indexOf(byname)+0;
	if((fromN) != -1) {
		fromN +=nlen 
		toN=document.cookie.indexOf(";",fromN)+0;
		if(toN == -1) 
			{toN=document.cookie.length;} 
		return unescape(document.cookie.substring(fromN,toN));
	}
	return null;
}

// Cette fonction écrit le cookie
function setCookie(name,value,time) {
	exp = new Date();
	if((name==null)||(value==null)) return false; 
	if(time==null) time=365*86400000; 
	exp.setTime(exp.getTime()+time);
	document.cookie =escape(name)+"="+escape(value)+"; expires="+exp.toGMTString();
	return true;
} 


// Cette fonction regarde dans le cookie la valeur du compteur d'accès
function checkAccess(){
	today=new Date();
	countvalue=getCookie("visite");
	if((countvalue==null)||(countvalue=="")) {
		countvalue="0";
    }
	countvalue=parseInt(countvalue)+1;
	setCookie("visite",countvalue);
} 

//vérifier si cookie existe
if(getCookie("visite") == null)
	{
		setCookie("visite", 1);
		
	}
else
	{
		var count = getCookie("visite");
		document.getElementById("ici").innerHTML = count + " fois";
		setCookie("visite", (parseInt(count)+1));

	}

var init = document.getElementById("initialiser");
init.addEventListener("click", function(){
	setCookie("visite", 1);
	document.location.reload();
});
