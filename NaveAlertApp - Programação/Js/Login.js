function Login()
{
	var fundo = new Image ();
	fundo.src =  "monitoria/MONITORIA.jpg"
	
	
	var botaoSim = new Image();
	botaoSim.src = "Monitoria/botaoSou.png"
	botaoSim_x = 70
	botaoSim_y = 300
	botaoSim_w = 465
	botaoSim_h = 100
	
	var botaoNao = new Image();
	botaoNao.src = "Monitoria/botaoNao.png"
	botaoNao_x = 70
	botaoNao_y = 500
	botaoNao_w = 465
	botaoNao_h = 100

		
	var botaovoltar2 = new Image();
	botaovoltar2.src = "Monitoria/voltare.png"
	botaovoltar2_x = 30
	botaovoltar2_y = 740
	botaovoltar2_w = 80
	botaovoltar2_h = 40
	
	
	this.draw = function ()
	{
		
		
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaoSim, botaoSim_x, botaoSim_y, botaoSim_w, botaoSim_h);
		context.drawImage(botaoNao, botaoNao_x, botaoNao_y, botaoNao_w, botaoNao_h);
		context.drawImage(botaovoltar2, botaovoltar2_x, botaovoltar2_y, botaovoltar2_w, botaovoltar2_h);
		
		
		if (MouseX > botaoSim_x && MouseX < botaoSim_x + botaoSim_w
		&& MouseY > botaoSim_y && MouseY < botaoSim_y + botaoSim_h
		&& MousePress)
		{
			console.log ("sim eu tenho");
			scene = "entrada"
		}
		
		if (MouseX > botaoNao_x && MouseX < botaoNao_x + botaoNao_w
		&& MouseY > botaoNao_y && MouseY < botaoNao_y + botaoNao_h
		&& MousePress)
		{
			console.log ("nao tenho login");
			scene = "criar"
		}
		
		if (MouseX > botaovoltar2_x && MouseX < botaovoltar2_x + botaovoltar2_w
		&& MouseY > botaovoltar2_y && MouseY < botaovoltar2_y + botaovoltar2_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
		
		
		
		
	}	
	
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
