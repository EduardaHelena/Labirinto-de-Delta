function Explicacao ()
{

	var fundo = new Image();
	fundo.src = "TelasJogos/InicioFundo.png"
	
	
	var balao1 = new Image();
	balao1.src = "TelasJogos/Falas/Fala3.png";
	balao1_x = 20;
	balao1_y = 10;
	balao1_w = 350;
	balao1_h = 150;	
	
	var balao2 = new Image();
	balao2.src = "TelasJogos/Falas/Fala4 - Cris.png";
	balao2_x = 20;
	balao2_y = 10;
	balao2_w = 350;
	balao2_h = 150;	
	
	var balao3 = new Image();
	balao3.src = "TelasJogos/Falas/Fala5 - Cris.png";
	balao3_x = 20;
	balao3_y = 10;
	balao3_w = 350;
	balao3_h = 150;	


	var botaoIr2 = new Image();
	botaoIr2.src = "TelasJogos/BotaoIr.png";
	botaoIr2_x = 295;
	botaoIr2_y = 120;
	botaoIr2_w = 38;
	botaoIr2_h = 30;	
	
	var botaoIr3 = new Image();
	botaoIr3.src = "TelasJogos/BotaoIr.png";
	botaoIr3_x = 260;
	botaoIr3_y = 120;
	botaoIr3_w = 38;
	botaoIr3_h = 32;	
	
	var botaoIr4 = new Image();
	botaoIr4.src = "TelasJogos/BotaoIr.png";
	botaoIr4_x = 50;
	botaoIr4_y = 120;
	botaoIr4_w = 38;
	botaoIr4_h = 32;	
	
	
	var cris = new Image();
	cris.src = "TelasJogos/cris.png";
	cris_x = 200;
	cris_y = 60;
	cris_w = 410;
	cris_h = 500;
	
	var estadoBalao1 = 0	

	this.draw = function()
	{
		if (estadoBalao1 == 0)
		{
			context.clearRect(0,0, canvas.width, canvas.height);
			context.drawImage(fundo,0,0,canvas.width,canvas.height);
			context.drawImage(balao1,balao1_x,balao1_y,balao1_w,balao1_h);
			context.drawImage(botaoIr2,botaoIr2_x,botaoIr2_y,botaoIr2_w,botaoIr2_h);
			context.drawImage(cris,cris_x,cris_y,cris_w,cris_h);
				
			
			if (MouseX > botaoIr2_x && MouseX < botaoIr2_x + botaoIr2_w &&
			MouseY > botaoIr2_y && MouseY < botaoIr2_y + botaoIr2_h && MousePress) 
			{
				estadoBalao1 = 1
				console.log("balao 1")
				
			} 
		
		}	
		
		if (estadoBalao1 == 1)
			
		{
			context.clearRect(balao1,balao1_x,balao1_y,balao1_w,balao1_h);
			context.clearRect(botaoIr2,botaoIr2_x,botaoIr2_y,botaoIr2_w,botaoIr2_h);
			context.drawImage(balao2,balao2_x,balao2_y,balao2_w,balao2_h);
			context.drawImage(botaoIr3,botaoIr3_x,botaoIr3_y,botaoIr3_w,botaoIr3_h);
			
				
				
			if (MouseX > botaoIr3_x && MouseX < botaoIr3_x + botaoIr3_w &&
			MouseY > botaoIr3_y && MouseY < botaoIr3_y + botaoIr3_h && MousePress) 
			{
				estadoBalao1 = 2
				console.log ("balao 2");
				
			}	
				
				
		}


		if (estadoBalao1 == 2)
		{
			context.clearRect(balao2, balao2_x, balao2_y, balao2_w, balao2_h);	
			context.clearRect(botaoIr3,botaoIr3_x,botaoIr3_y,botaoIr3_w,botaoIr3_h);
			context.drawImage(balao3,balao3_x,balao3_y,balao3_w,balao3_h);
			context.drawImage(botaoIr4,botaoIr4_x,botaoIr4_y,botaoIr4_w,botaoIr4_h);
			
				
			if (MouseX > botaoIr4_x && MouseX < botaoIr4_x + botaoIr4_w &&
			MouseY > botaoIr4_y && MouseY < botaoIr4_y + botaoIr4_h && MousePress) 
			{
				estadoBalao1 = 0
				console.log ("balao 3");
				scene = "faseUm"
			}	
				
			
		}
				
				
	}
		
			
}

