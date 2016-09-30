<!DOCTYPE html>
<html>
<head>
	<title>ListeLiens</title>

</head>
<body>
<p>Voici la liste des liens</p>

<?php 

	//vérification de l'existence du fichier par un booléen
	if( file_exists("ListeLiens.txt")){
		//ouverture du fichier texte
	$fichier = fopen("ListeLiens.txt", "r+");
	//lectures du fichier texte
	$array = file("ListeLiens.txt");
	//affichage ds une liste
	foreach ($array as $key => $lien) {		
		echo"<ul><li><a href=$lien>".$lien."</li></ul>";
	}
	}	
	else{
		echo "le fichier n'existe pas";
	}
	
 ?>

</body>
</html>