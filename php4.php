<!DOCTYPE html>
<html>
<head>
	<title>php4</title>
</head>
<body>
	<table border="4"> 
	<?php 
	echo "<tr><td></td>"; 
//la première ligne 
	for ($i=0;$i<=13;$i=$i+1) 
	{ 
	echo"<th>".$i."</th>"; 
} 
echo"</tr>"; 

for ($j=0;$j<=13;$j++) 
{ 
echo"<tr><th>".$j."</th>"; //la première colonne en gras
for($k=0;$k<=13;$k++) 
{ 
$p=$j*$k; 
echo"<td>".$p."</td>"; 
} 
echo"</tr>\n"; 
} 


?> 
</body>
</html>