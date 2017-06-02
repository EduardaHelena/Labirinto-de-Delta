function Ajuda()
{
		var fundoAjuda = new Image();
		fundoAjuda.src = "Menu/AjudaFundo.png"
		
		var botaoVoltar = new Image();
		botaoVoltar.src = "Menu/voltar.png";
		botaoVoltar_x = 50;
		botaoVoltar_y = 450;
		botaoVoltar_w = 136;
		botaoVoltar_h = 38;	
		
		
	
		this.draw = function()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundoAjuda,0,0,canvas.width,canvas.height);
		context.drawImage(botaoVoltar,botaoVoltar_x,botaoVoltar_y,botaoVoltar_w,botaoVoltar_h);
		
		if (MouseX > botaoVoltar_x && MouseX < botaoVoltar_x + botaoVoltar_w &&
		MouseY > botaoVoltar_y && MouseY < botaoVoltar_y + botaoVoltar_h && MousePress) 
		{
			scene = "menu"
			console.log("Voltar menu")
		}
	}

	
	
	

}