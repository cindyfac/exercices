<html>
 <head>
 <title> Atelier PHP N°4 - page de détail </title>
 <?php
		 require "connexionBase.php"; // Inclusion de notre bibliothèque de fonctions
		 $db = connexionBase ();// Appel de la fonction de connexion
		 $id=$_GET["id"];
		 $str_requete = "SELECT * FROM liens WHERE id=".$id;
		 $result = $db->query($str_requete);

		 // Renvoi de l'enregistrement sous forme d'un objet
		 $lien = $result->fetch(PDO::FETCH_OBJ);
?>

 </head>
 <body>
 <?php echo $lien->titre ?><i> Webmaster <?php echo $lien->webmaster
 ?></i>
 <br />
 <?php echo $lien->description ?>
 <br />
 <?php echo $lien->url ?>
 </body>
 </html>