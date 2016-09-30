
var aleatoire = Math.floor(Math.random() * 100) + 1  ;

function verif(){
	var regex = new RegExp("^[0-9]+$");	
	var nbtest = $("#textBox1").val();
	console.log(aleatoire); 

if ($("#textBox1").val().length != 0)
{
	if(!regex.test(nbtest))
	{
		$("#label1").html("saisissez un nombre");
	}
	else
	{
		nbtest = parseInt(nbtest);
		if (nbtest != aleatoire)
		{
			if(nbtest < aleatoire)
			{			
			$("#label1").html("trop petit !");			
			}
			else if(nbtest > aleatoire)
			{
			$("#label1").html("trop grand !");			
			}
		}
		else
		{
			$("#label1").html("Bien joué !");			
		}		
	}
}
else{
	$("#label1").html("saissiez un nombre");
}
};

var event = document.getElementById("button1");
event.addEventListener("click", verif);


