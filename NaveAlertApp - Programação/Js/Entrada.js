function Entrada()
{
	var fundo = new Image ();
	fundo.src =  "Monitoria/Login.png"
	
	var botaovoltar3 = new Image();
	botaovoltar3.src = "Monitoria/voltare.png"
	botaovoltar3_x = 50
	botaovoltar3_y = 700
	botaovoltar3_w = 100
	botaovoltar3_h = 60
	
	var botaoentrar = new Image();
	botaoentrar.src = "Monitoria/Entrar.png"
	botaoentrar_x = 450
	botaoentrar_y = 730
	botaoentrar_w = 100
	botaoentrar_h = 60
	
	
	
	this.draw = function()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaovoltar3, botaovoltar3_x, botaovoltar3_y, botaovoltar3_w, botaovoltar3_h);
		context.drawImage(botaoentrar, botaoentrar_x, botaoentrar_y, botaoentrar_w, botaoentrar_h);
		
		if (MouseX > botaoentrar_x && MouseX < botaoentrar_x + botaoentrar_w
		&& MouseY >  botaoentrar_y && MouseY < botaoentrar_y + botaoentrar_h
		&& MousePress)
		{
			console.log("entra logo");
			scene = "boletim"
			

		}
		
		if (MouseX > botaovoltar3_x && MouseX < botaovoltar3_x + botaovoltar3_w
		&& MouseY > botaovoltar3_y && MouseY < botaovoltar3_y + botaovoltar3_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
	}	
	
	
	
	
	
	
	
	
	
	
}