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

		



	});
	
		
	
	function refresh()
	{
		var bloc = document.getElementById("bloc");
		var lastId;

		
		if(bloc.children.length > 0)
		{
			
			var div = bloc.lastChild;
			lastId = div.id;
		}
		else
		{
			lastId = 1;
		}
		
		console.log(lastId);

		$.ajax(
		{
			url: "contentDisplay.php",
			type: "POST",
			data: "offset=" + lastId,
			dataType: 'html',
			success: function(content,status)
			{
				var pattern = new RegExp("( |')ange ","i")
				var test = pattern.test(content);

			

				if(test)
				{
					console.log("ANGE !!!");
				}

				$("#bloc").append(content);



			}

		});

	}
	
	refresh();
	var timeout = setInterval(function(){refresh();}, 3000);

});

