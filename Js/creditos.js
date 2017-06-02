function Creditos()
{
	var fundoCreditos = new Image();
	fundoCreditos.src ="Menu/CreditosFundo.png";
	
	
	var botaoVoltar = new Image();
	botaoVoltar.src = "Menu/voltar.png";
	botaoVoltar_x = 650;
	botaoVoltar_y = 450;
	botaoVoltar_w = 80;
	botaoVoltar_h = 38;	
	
	
		
	
	this.draw = function()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundoCreditos,0,0,canvas.width,canvas.height);
		context.drawImage(botaoVoltar,botaoVoltar_x,botaoVoltar_y,botaoVoltar_w,botaoVoltar_h);
		
		if (MouseX > botaoVoltar_x && MouseX < botaoVoltar_x + botaoVoltar_w &&
		MouseY > botaoVoltar_y && MouseY < botaoVoltar_y + botaoVoltar_h && MousePress) 
		{
			scene = "menu"
			console.log("AAAAAAA")
		}
	
	}

}