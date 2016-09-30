function VerifSociete(){
	if (societe.value.length == 0) {
		societe.style.backgroundColor="red";
		return false;		
	}
	else{
		societe.style.backgroundColor="white";
		return true;
	}
};

function VerifPersonne(){
	if (personne.value.length == 0) {
		personne.style.backgroundColor="red";
		return false;		
	}
	else{
		personne.style.backgroundColor="white";
		return true;
	}
};

function VerifCodepostal(){
	
	if(codepostal.value.length == 0){
		codepostal.style.backgroundColor="red";
		return false;
	}
	else{
		var monregex = new RegExp("^[0-9]{5}$");
		if (!monregex.test(codepostal.value)) {
		codepostal.style.backgroundColor="red";
		return false;		
			}
		else{
			codepostal.style.backgroundColor="white";
			return true;
			}
		}	
};

function VerifVille(){
	if (ville.value.length == 0) {
		ville.style.backgroundColor="red";
		return false;
		
	}
	else{
		ville.style.backgroundColor="white";
		return true;
	}
};

function VerifMail(){
	var regex = new RegExp("^[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
	if(!regex.test(mail.value)){
		mail.style.backgroundColor="red";
		return false;		
	}
	else{
		mail.style.backgroundColor="white";
		return true;
	}
};


var societe = document.getElementById("societe");
societe.addEventListener("blur", VerifSociete);

var personne = document.getElementById("personne");
personne.addEventListener("blur", VerifPersonne);

var codepostal = document.getElementById("codepostal");
codepostal.addEventListener("blur", VerifCodepostal);

var ville = document.getElementById("ville");
ville.addEventListener("blur", VerifVille);

var mail = document.getElementById("mail");
mail.addEventListener("blur", VerifMail); 


var combo = document.getElementById("listeenvironnement");
combo.addEventListener("change", function() {
	if (combo.selectedIndex > 0){
		var ind = combo.selectedIndex;
		var ligne = combo.options[combo.selectedIndex];
		console.log(ind);
		console.log(ligne.value);
		console.log(ligne.text);
   		//var selectedtext = document.getElementById("listeenvironnement").options.selectedIndex.text;
   		var zonetexte = document.getElementById("zonetexteenvironnement");
   		// indexselectionne.addEventListener("clic", function(){
   		// 	zonetexte =+ " " + selectedtext;
   		// });
   		zonetexte.value += ligne.value + "\n";
   }
});

var btn1 = document.getElementById("btnenvoyer");
btn1.addEventListener("click", function() {
	var form1 = document.getElementById("form1");
	if (VerifSociete() || VerifMail() || VerifVille() || VerifCodepostal() || VerifPersonne()) {
		form1.submit();
	}
});
