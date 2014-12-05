<?php 

$bdd = mysqli_connect("localhost", "root", "", "ange");
mysqli_set_charset($bdd, "utf8");

if(!$bdd)
{
	echo "problème connection";
}
else
{
	if(isset($_POST['offset']))
	{

		$offset = htmlentities($_POST['offset']);
		/*$result = mysqli_query($bdd,"SELECT COUNT(id) FROM messages");
		$limit = mysqli_fetch_assoc($result);
		echo $limit;*/

		$query = "SELECT id, message, auteur FROM messages WHERE id > $offset";
		$result = mysqli_query($bdd, $query);

	
		while($donnees = mysqli_fetch_assoc($result))
		{
			echo "<div id='";
			echo $donnees['id'];
			echo"' >";
			echo "<p>" . html_entity_decode($donnees['message'],ENT_QUOTES) . "</p><h3>" . $donnees['auteur'] . "</h3>";
			echo "</div>";
		}

	}
	

	
}


 ?>