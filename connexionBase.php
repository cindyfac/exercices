<?php
	function connexionBase()
	{
	 // Paramètre de connexion serveur
		 $host = "localhost";
		 $login= "root"; // Votre loggin d'accès au serveur de BDD
		 $password=""; // Le Password pour vous identifier auprès du serveur
		 $base = "sites"; // La bdd avec laquelle vous voulez travailler

			 try {
			 $db = new PDO('mysql:host=' . $host . ';charset=utf8;dbname=' . $base, $login, $password);
			 return $db;

			 } catch (Exception $e) {
			 print 'Erreur : ' . $e->getMessage() . '<br />';
			 print 'N° : ' . $e->getCode();
			 die("Connexion au serveur impossible. ");
			 }
	}
?>