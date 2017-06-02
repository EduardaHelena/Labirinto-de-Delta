function Pronto ()
{
	var fundo = new Image ();
	fundo.src = "pronto/pronto.jpg"

	
	
	
	var botaovoltar5 = new Image ();
	botaovoltar5.src = "Pronto/voltar.png"
	botaovoltar5_x = 250
	botaovoltar5_y = 740
	botaovoltar5_w = 100
	botaovoltar5_h = 50
	
	
	this.draw = function()
	
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaovoltar5, botaovoltar5_x, botaovoltar5_y, botaovoltar5_w, botaovoltar5_h);
		
		if (MouseX > botaovoltar5_x && MouseX < botaovoltar5_x + botaovoltar5_w
		&& MouseY > botaovoltar5_y && MouseY < botaovoltar5_y + botaovoltar5_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
		
		
		
		
	}
	
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
