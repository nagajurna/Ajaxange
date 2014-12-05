<?php 

$bdd = mysqli_connect("localhost", "root", "", "ange");
mysqli_set_charset($bdd, "utf8");

if(!$bdd)
{
	echo "problème connection";
}
else
{
	
		if(isset($_POST['message']) && isset($_POST['auteur']))
		{

			$message = htmlspecialchars($_POST['message']);
			$auteur = htmlspecialchars($_POST['auteur']);

			$query = "INSERT INTO messages (auteur,message) VALUES ('$auteur', '$message')";
			$requete = mysqli_query($bdd, $query);
			echo "message reçu (" .  date("l jS \of F Y h:i:s A") . ")";
			
		}
		else
		{
			echo "problème !";
		}

}

 ?>