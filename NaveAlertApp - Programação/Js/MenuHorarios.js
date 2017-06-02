function Menuhorarios ()
{
	var fundo = new Image ();
	fundo.src = "Horarios/TURMA.jpg"

	var botao1001 = new Image();
	botao1001.src = "Menu/1001.png"
	botao1001_x = 150
	botao1001_y = 150
	botao1001_w = 300
	botao1001_h = 72
	
	var botao1002 = new Image();
	botao1002.src = "Menu/1002.png"
	botao1002_x = 150
	botao1002_y = 275
	botao1002_w = 300
	botao1002_h = 72
	
	var botao1003 = new Image();
	botao1003.src = "Menu/1003.png"
	botao1003_x = 150
	botao1003_y = 400
	botao1003_w = 300
	botao1003_h = 72
	
	var botao1004 = new Image();
	botao1004.src = "Menu/1004.png"
	botao1004_x = 150
	botao1004_y = 525
	botao1004_w = 300
	botao1004_h = 72
	
	var botaovoltar = new Image ();
	botaovoltar.src = "Menu/Voltar.png"
	botaovoltar_x = 50
	botaovoltar_y = 740
	botaovoltar_w = 80
	botaovoltar_h = 40
	
	
	this.draw = function()
	
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botao1001, botao1001_x, botao1001_y, botao1001_w, botao1001_h);
		context.drawImage(botao1002, botao1002_x, botao1002_y, botao1002_w, botao1002_h);
		context.drawImage(botao1003, botao1003_x, botao1003_y, botao1003_w, botao1003_h);
		context.drawImage(botao1004, botao1004_x, botao1004_y, botao1004_w, botao1004_h);
		context.drawImage(botaovoltar, botaovoltar_x, botaovoltar_y, botaovoltar_w, botaovoltar_h);
		
		if (MouseX > botao1001_x && MouseX < botao1001_x + botao1001_w
		&& MouseY > botao1001_y && MouseY < botao1001_y + botao1001_h
		&& MousePress)
		{
			console.log("1001");
			scene = "horarios"

		}
		
		if (MouseX > botao1002_x && MouseX < botao1002_x + botao1002_w
		&& MouseY > botao1002_y && MouseY < botao1002_y + botao1002_h
		&& MousePress)
		{
			console.log("1002");
			scene = "horarios"

		}
		
		if (MouseX > botao1003_x && MouseX < botao1003_x + botao1003_w
		&& MouseY > botao1003_y && MouseY < botao1003_y + botao1003_h
		&& MousePress)
		{
			console.log("1003");
			scene = "horarios"

		}
		
		
		if (MouseX > botao1004_x && MouseX < botao1004_x + botao1004_w
		&& MouseY > botao1004_y && MouseY < botao1004_y + botao1004_h
		&& MousePress)
		{
			console.log("1004");
			scene = "horarios"

		}
		
		if (MouseX > botaovoltar_x && MouseX < botaovoltar_x + botaovoltar_w
		&& MouseY > botaovoltar_y && MouseY < botaovoltar_y + botaovoltar_h
		&& MousePress)
		{
			console.log("voltei");
			scene = "menu"

		}
		
		
		
		
		
	}
	
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
