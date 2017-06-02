function Menu()
{
	var Fundo = new Image();
	Fundo.src = "Menu/Fundo.png";
	

	
	var botaoPlay = new Image ();
	botaoPlay.src = "Menu/Play.png";
	botaoPlay_x = canvas.width/2 - 104;
	botaoPlay_y = 300;
	botaoPlay_w = 209;
	botaoPlay_h = 38;	
	
	var botaocreditos = new Image();
	botaocreditos.src = "Menu/Creditos.png";
	botaocreditos_x = canvas.width/2 - 95
	botaocreditos_y = 350;
	botaocreditos_w = 190;
	botaocreditos_h = 35;	
	
	
	var botaoAjuda = new Image();
	botaoAjuda.src = "Menu/Ajuda.png";
	botaoAjuda_x = canvas.width/2 - 90
	botaoAjuda_y = 400
	botaoAjuda_w = 180
	botaoAjuda_h = 30
	
	
	
   this.draw = function()
   {	   
		musiquinha.play();
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(Fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaoPlay,botaoPlay_x,botaoPlay_y,botaoPlay_w,botaoPlay_h);
		context.drawImage(botaocreditos,botaocreditos_x , botaocreditos_y, botaocreditos_w, botaocreditos_h);
		context.drawImage(botaoAjuda,botaoAjuda_x, botaoAjuda_y, botaoAjuda_w, botaoAjuda_h);
		
		if (MouseX > botaoPlay_x && MouseX < botaoPlay_x + botaoPlay_w
		&& MouseY > botaoPlay_y && MouseY < botaoPlay_y + botaoPlay_h
		&& MousePress) 
		{
			scene = "inicio"			
		}
			
		else if (MouseX > botaocreditos_x &&	MouseX < botaocreditos_x + botaocreditos_w &&
		MouseY > botaocreditos_y && MouseY < botaocreditos_y + botaocreditos_h && MousePress)
		{
			scene = "creditos"
			console.log ("agriao")
		}
		
		else if (MouseX > botaoAjuda_x && MouseX < botaoAjuda_x + botaoAjuda_w &&
		MouseY > botaoAjuda_y && MouseY < botaoAjuda_y + botaoAjuda_h && MousePress)
		{
			scene = "ajuda"
			console.log ("pepino")
		}
		
		
   }
   
   
  
} 


