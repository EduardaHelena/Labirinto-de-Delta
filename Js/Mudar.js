function Mudar ()
{
	
	var fundo = new Image();
	fundo.src = "Fase 2/fase2.png"	
	
	var segunda = new Image();
	segunda.src = "Fase 2/proximafase.png";
	segunda_x = 530;
	segunda_y = 475;
	segunda_w = 200;
	segunda_h = 55;	
	
	this.draw = function()
	{
		
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(segunda,segunda_x,segunda_y,segunda_w,segunda_h);
		
		
	if (MouseX > segunda_x && MouseX < segunda_x + segunda_w
		&& MouseY > segunda_y && MouseY < segunda_y + segunda_h && MousePress) 
		{
	
			scene = "faseDois"
		}
	
	
	}
	
	
	
}