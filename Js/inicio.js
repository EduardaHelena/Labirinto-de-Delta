function Inicio ()
{
		var fundoInicio = new Image();
		fundoInicio.src = "TelasJogos/InicioFundo.png"
		
		var leo = new Image();
		leo.src = "TelasJogos/leo.png";
		leo_x = 260;
		leo_y = 73;
		leo_w = 250;
		leo_h = 500;
		
		var balao = new Image();
		balao.src = "TelasJogos/Falas/Fala1.png";
		balao_x = 40;
		balao_y = 10;
		balao_w = 327;
		balao_h = 154;	
		
		var balao1 = new Image();
		balao1.src = "TelasJogos/Falas/Fala2.png";
		balao1_x = 40;
		balao1_y = 10;
		balao1_w = 327;
		balao1_h = 154;	

			/*var botaoComecar = new Image();
		botaoComecar.src = "Comecar.png";
		botaoComecar_x = 650;
		botaoComecar_y = 450;
		botaoComecar_w = 80;
		botaoComecar_h = 38;	
		*/
		
		var botaoIr = new Image();
		botaoIr.src = "TelasJogos/BotaoIr.png";
		botaoIr_x = 280;
		botaoIr_y = 120;
		botaoIr_w = 38;
		botaoIr_h = 32;	
		
		var botaoIr1 = new Image();
		botaoIr1.src = "TelasJogos/BotaoIr.png";
		botaoIr1_x = 60;
		botaoIr1_y = 120;
		botaoIr1_w = 38;
		botaoIr1_h = 32;	
	
		var botaoVoltar2 = new Image();
		botaoVoltar2.src = "Menu/voltar.png";
		botaoVoltar2_x = 95;
		botaoVoltar2_y = 450;
		botaoVoltar2_w = 138;
		botaoVoltar2_h = 38;		
		
		var estadoBalao = 0
		
		this.draw = function ()
		{			
			if (estadoBalao == 0)
			{				
				context.clearRect(0,0, canvas.width, canvas.height)	
				context.drawImage(fundoInicio,0,0,canvas.width,canvas.height);	
				context.drawImage(leo,leo_x,leo_y,leo_w,leo_h);
				context.drawImage(botaoVoltar2,botaoVoltar2_x,botaoVoltar2_y,botaoVoltar2_w,botaoVoltar2_h);
				context.drawImage(balao,balao_x,balao_y,balao_w,balao_h);
				context.drawImage(botaoIr,botaoIr_x,botaoIr_y,botaoIr_w,botaoIr_h);
				
				if (MouseX > botaoIr_x && MouseX < botaoIr_x + botaoIr_w &&
					MouseY > botaoIr_y && MouseY < botaoIr_y + botaoIr_h && MousePress)
					{
						console.log ("To colidindo o balao 1")
						estadoBalao = 1	
					}
			
			}
		
			else if (estadoBalao == 1)
			{
				context.clearRect(balao,balao_x,balao_y,balao_w,balao_h)	
				context.clearRect(botaoIr,botaoIr_x,botaoIr_y,botaoIr_w,botaoIr_h)
				context.drawImage(balao1,balao1_x,balao1_y,balao1_w,balao1_h);
				context.drawImage(botaoIr1,botaoIr1_x,botaoIr1_y,botaoIr1_w,botaoIr1_h);
				console.log("to desenhando o 2 fala");
				
				
				if (MouseX > botaoIr1_x && MouseX < botaoIr1_x + botaoIr1_w &&
				MouseY > botaoIr1_y && MouseY < botaoIr1_y + botaoIr1_h && MousePress) 
				{
				estadoBalao = 0; 
				console.log ("eu quero explicar");
				scene = "explicacao";
				}
				
			
			} 
			
		
		
		/*if (MouseX > botaoIr1_x && MouseX < botaoIr1_x + botaoIr1_w &&
			MouseY > botaoIr1_y && MouseY < botaoIr1_y + botaoIr1_h && MousePress) 
			{	
			//scene = "explicacao"
			console.log ("eu quero explicar");
			}
		*/
		
		 if (MouseX > botaoVoltar2_x && MouseX < botaoVoltar2_x + botaoVoltar2_w &&
		MouseY > botaoVoltar2_y && MouseY < botaoVoltar2_y + botaoVoltar2_h && MousePress)
		{
			estadoBalao = 0
			scene = "menu"			
		}
		
		
		
		}
		

	
}