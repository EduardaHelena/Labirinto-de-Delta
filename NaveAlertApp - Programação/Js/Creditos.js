function Creditos(){
	
	
	
	var fundo = new Image ();
	fundo.src =  "Creditos/creditos.png"
	
	var botaovoltar3 = new Image();
	botaovoltar3.src = "Monitoria/voltare.png"
	botaovoltar3_x = 30
	botaovoltar3_y = 740
	botaovoltar3_w = 80
	botaovoltar3_h = 40
	
	
	
	this.draw = function()
	{
		
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaovoltar3, botaovoltar3_x, botaovoltar3_y, botaovoltar3_w, botaovoltar3_h);
		
		
		if (MouseX > botaovoltar3_x && MouseX < botaovoltar3_x + botaovoltar3_w
		&& MouseY > botaovoltar3_y && MouseY < botaovoltar3_y + botaovoltar3_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
	}
	
}	