function Instrucoes ()
{
	var fundo = new Image ();
	fundo.src = "instrucoes/instrucoes.jpg"

	
	
	
	var bv5 = new Image ();
	bv5.src = "instrucoes/voltar.png"
	bv5_x = 435
	bv5_y = 745
	bv5_w = 90
	bv5_h = 40
	
	
	this.draw = function()
	
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(bv5, bv5_x, bv5_y, bv5_w, bv5_h)
	
		
		if (MouseX > bv5_x && MouseX < bv5_x + bv5_w
		&& MouseY > bv5_y && MouseY < bv5_y + bv5_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
		
		
		
		
	}
	
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
