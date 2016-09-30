<!DOCTYPE html>
<html>
<head>
	<title>tablemultiplication</title>
</head>
<body>
	<table border="4">
		<?php 
		//affichage de la première ligne
			echo "<tr><td></td>";
			for ($i=0; $i <13; $i++) { 
				echo "<th>".$i."</th>"; //th permet affichage en gras
			}
			echo "<tr>";
			//affichage 
			for ($j=0;$j<13;$j++) 
			{ 
			echo"<tr><th>".$j."</th>"; //affichage de la colonne de gauche
				for($k=0;$k<13;$k++)//affichage de la ligne de multiplication 
				{ 
				$p=$j*$k; 
				echo"<td>".$p."</td>"; 
				} 
			echo"</tr>\n"; 
			} 
			


		 ?>
	 </table>
</body>
</html>