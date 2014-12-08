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
		var ange = document.getElementById("ange");
		ange.style.display = "none";

		
		if(bloc.children.length > 0)
		{
			
			var div = bloc.firstElementChild;
			lastId = div.id;
		}
		else
		{
			lastId = 1;
		}
		
		
		$.ajax(
		{
			url: "contentDisplay.php",
			type: "POST",
			data: "offset=" + lastId,
			dataType: 'html',
			
			success: function(content,status)
			{
				var pattern = new RegExp("( |')ang(es? |es?)","i")
				var test = pattern.test(content);

				if(test)
				{
					ange.style.display = "block";
				}

				$("#bloc").prepend(content);

			}

		});

	}
	
	
	var timeout = setInterval(function(){refresh();}, 3000);

});

