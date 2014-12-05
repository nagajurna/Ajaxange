$(document).ready(function()
{

	$("#valid").click(function()
	{
		
		var message = $("#message").val();
		var auteur = $("#auteur").val();

		
		$.ajax(

		{
			url: "contentLoader.php",
			type: "POST",// GET par défaut
			data: "message=" + message + "&auteur=" + auteur,
			dataType: 'html',
			success: function(content,status)
			{
				
				console.log(content);
			},
			error: function(content,status,errorMsg)
			{

			}
			
		});

		//function refresh()

		//{
			var div = document.getElementById("bloc").lastChild;
			var lastId = 10;
			

			$.ajax(

			{
				url: "contentDisplay.php",
				type: "POST",
				data: "offset=" + lastId,
				dataType: 'html',
				success: function(content,status)
				{
					
					
					$("#bloc").append(content);


				}

			});

		//}



	});
	
		
	
	
	
	


});

