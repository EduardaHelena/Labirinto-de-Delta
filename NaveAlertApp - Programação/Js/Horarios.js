function Horarios ()

{
	var fundo = new Image ();
	fundo.src =  "Horarios/horarios.jpg"
	
	var botaovoltar1 = new Image ();
	botaovoltar1.src = "Horarios/vooltar.png"
	botaovoltar1_x = 490
	botaovoltar1_y = 765
	botaovoltar1_w = 100
	botaovoltar1_h = 30
	
	
	
	
	this. draw = function ()
	
	{
		
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaovoltar1, botaovoltar1_x, botaovoltar1_y, botaovoltar1_w, botaovoltar1_h);
		
		if (MouseX > botaovoltar1_x && MouseX < botaovoltar1_x + botaovoltar1_w
		&& MouseY > botaovoltar1_y && MouseY < botaovoltar1_y + botaovoltar1_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menuhorarios"

		}
		
		
		
		
		
		
	}
	
	
	
	
}