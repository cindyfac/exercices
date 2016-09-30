//on cache le menu au démarrage
$(document).ready(function(){
	$("#ListeMenu").hide();
});

$("#BtnCatalogue").click(function(){
	$("#ListeMenu").slideToggle("slow")
});