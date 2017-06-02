function Criar ()
{
	var fundo = new Image ();
	fundo.src =  "Monitoria/Criar.jpg"
	
	var botaovoltar4 = new Image();
	botaovoltar4.src = "Monitoria/voltare.png"
	botaovoltar4_x = 50
	botaovoltar4_y = 740
	botaovoltar4_w = 100
	botaovoltar4_h = 40
	
	var botaoentrar1 = new Image();
	botaoentrar1.src = "Monitoria/Entrar.png"
	botaoentrar1_x = 450
	botaoentrar1_y = 730
	botaoentrar1_w = 100
	botaoentrar1_h = 60
	
	this.draw = function()
	{
		
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaovoltar4, botaovoltar4_x, botaovoltar4_y, botaovoltar4_w, botaovoltar4_h);
		context.drawImage(botaoentrar1, botaoentrar1_x, botaoentrar1_y, botaoentrar1_w, botaoentrar1_h);
		
		if (MouseX > botaoentrar1_x && MouseX < botaoentrar1_x + botaoentrar1_w
		&& MouseY >  botaoentrar1_y && MouseY < botaoentrar1_y + botaoentrar1_h
		&& MousePress)
		{
			console.log("entra logo");
			scene = "entrada"

		}
		
		if (MouseX > botaovoltar4_x && MouseX < botaovoltar4_x + botaovoltar4_w
		&& MouseY > botaovoltar4_y && MouseY < botaovoltar4_y + botaovoltar4_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
	}	
	
	
}