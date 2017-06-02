function Menu ()
{
	var Fundo = new Image();
	Fundo.src = "Menu/Fundo.jpg";
	
	var botaocreditos = new Image();
	botaocreditos.src = "Menu/botao_creditos.png";
	botaocreditos_x = 100
	botaocreditos_y = 300
	botaocreditos_w = 400
	botaocreditos_h = 83
	
	var botaohorarios= new Image();
	botaohorarios.src = "Menu/botao_horarios.png";
	botaohorarios_x = 100
	botaohorarios_y = 300
	botaohorarios_w = 400
	botaohorarios_h = 83
	
	var botaomonitorias = new Image();
	botaomonitorias.src = "Menu/botao_monitoria.png";
	botaomonitorias_x = 100
	botaomonitorias_y = 390
	botaomonitorias_w = 400
	botaomonitorias_h = 83
	
	var botaoinstrucoes = new Image();
	botaoinstrucoes.src = "Menu/botao_instrucoes.png";
	botaoinstrucoes_x = 100
	botaoinstrucoes_y = 480
	botaoinstrucoes_w = 400
	botaoinstrucoes_h = 83
	
	var botaocreditos = new Image();
	botaocreditos.src = "Menu/botao_creditos.png";
	botaocreditos_x = 100
	botaocreditos_y = 570
	botaocreditos_w = 400
	botaocreditos_h = 83
	
	
	
	this.draw = function ()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(Fundo,0,0,canvas.width,canvas.height);
		context.drawImage(botaocreditos, botaocreditos_x, botaocreditos_y, botaocreditos_w, botaocreditos_h);
		context.drawImage(botaohorarios,botaohorarios_x, botaohorarios_y, botaohorarios_w, botaohorarios_h);
		context.drawImage(botaomonitorias, botaomonitorias_x, botaomonitorias_y, botaomonitorias_w, botaomonitorias_h);
		context.drawImage(botaoinstrucoes, botaoinstrucoes_x, botaoinstrucoes_y, botaoinstrucoes_w, botaoinstrucoes_h);
		
		
		 if (MouseX > botaocreditos_x && MouseX < botaocreditos_x + botaocreditos_w
		&& MouseY > botaocreditos_y && MouseY < botaocreditos_y + botaocreditos_h
		&& MousePress)
		{
			console.log("credito");
			scene = "creditos"
		}
		
		if (MouseX > botaohorarios_x && MouseX < botaohorarios_x + botaohorarios_w
		&& MouseY > botaohorarios_y && MouseY < botaohorarios_y + botaohorarios_h
		&& MousePress)
		{
			console.log("horarios");
			scene = "menuhorarios"
		}
		
		if (MouseX > botaomonitorias_x && MouseX < botaomonitorias_x + botaomonitorias_w
		&& MouseY > botaomonitorias_y && MouseY < botaomonitorias_y + botaomonitorias_h
		&& MousePress)
		{
			console.log ("monitorias");
			scene = "login"
		}
		
		if (MouseX > botaoinstrucoes_x && MouseX < botaoinstrucoes_x + botaoinstrucoes_w
		&& MouseY > botaoinstrucoes_y && MouseY < botaoinstrucoes_y + botaoinstrucoes_h
		&& MousePress)
		{
			console.log ("instruções");
			scene = "instrucoes"
		}
	}
	
	
	
}