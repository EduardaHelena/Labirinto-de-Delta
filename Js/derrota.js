function Derrota ()
{
	var fundoDerrota = new Image();
	fundoDerrota.src = "Fase 1/derrota.png"
	
	var novamente = new Image();
	novamente.src = "Fase 1/botaonovo.png";
	novamente_x = 325;
	novamente_y = 475;
	novamente_w = 240;
	novamente_h = 55;	
		
	
	this.draw = function ()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundoDerrota, 0, 0, canvas.width, canvas.height);
		context.drawImage(novamente,novamente_x,novamente_y,novamente_w,novamente_h);
		
		if (MouseX > novamente_x && MouseX < novamente_x + novamente_w &&
		MouseY > novamente_y && MouseY < novamente_y + novamente_h && MousePress) 
		{
			scene = "menu"
			estadobalao = 0
			console.log("perdi");
			
		}
	}
	
	
	
	
	
}