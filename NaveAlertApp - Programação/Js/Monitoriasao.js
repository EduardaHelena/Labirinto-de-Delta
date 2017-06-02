function Monitoriasao ()
{
	var fundo = new Image ();
	fundo.src = "monitoria/monitoriasao.jpg"

	
	
	
	var botaoAlertar = new Image ();
	botaoAlertar.src = "monitoria/alertar.png"
	botaoAlertar_x = 250
	botaoAlertar_y = 730
	botaoAlertar_w = 100
	botaoAlertar_h = 60
	
	
	this.draw = function()
	
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaoAlertar, botaoAlertar_x, botaoAlertar_y, botaoAlertar_w, botaoAlertar_h);
		
		if (MouseX > botaoAlertar_x && MouseX < botaoAlertar_x + botaoAlertar_w
		&& MouseY > botaoAlertar_y && MouseY < botaoAlertar_y + botaoAlertar_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "pronto"

		}
		
		
		
		
		
	}
	
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
