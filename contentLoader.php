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

			$message = htmlentities($_POST['message'],ENT_QUOTES);
			$auteur = htmlentities($_POST['auteur'],ENT_QUOTES);

			$query = "INSERT INTO messages (auteur,message) VALUES ('$auteur', '$message')";
			mysqli_query($bdd, $query);
			echo "message reçu (" .  date("l jS \of F Y h:i:s A") . ")";



			
		}
		else
		{
			echo "problème !";
		}

}

 ?>