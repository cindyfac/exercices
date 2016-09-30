 <html>
 <head>
 <title> Atelier PHP N° 4 _ Affichage du Sommaire </title>
 </head>
 <body bgcolor='#FFFFCC'>

	 <?php
	 require "connexionBase.php"; // Inclusion de notre bibliothèque de fonctions
	 $db = connexionBase(); // Appel de la fonction de connexion


	 $str_requete = "SELECT id,titre,url FROM liens WHERE affichage='oui' ORDER BY date DESC"; //requete
	 $result = $db->query($str_requete);//stock résultat

	 if (!$result) {
	 print "PDO::errorInfo():";
	 //print_r($cnx->errorInfo());
	 $msg = $db->errorInfo();
	 print $msg[2] . "<br />";
	 //print_r($cnx->errorInfo());
	 die("Erreur dans la requête ! (str_requete)<br>
	 <a href=\"javascript:history.go(-1)\">BACK</a>");
	}
	?>

<h2><p align='center'>SOMMAIRE</h2>
<i> (liste triée par date de création) </i></p align><br />
	
	 <?php
	 if ($result->rowCount() == 0) {
	 // Pas d'enregistrement
	 die("La table est vide");
	 }
	 print ("<table width='100%' border='0'>");

	 while ($lien = $result->fetch(PDO::FETCH_OBJ))//On vérifie d'abord la présence d'un enregistrement
	 {
	 print("<tr>
	 <td width='5%'>$lien->id</td>
	 <td width='49%'>$lien->titre</td>
	 <td> <i><a href='$lien->url'>$lien->url</a></i></td>
	 <td width='14%'><a href='detail.php?id=$lien->id'>Afficher le détail</a></td>
	 </tr>");
	 }

 	print ('</table>');

 	?>
 </body>
</html>