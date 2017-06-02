function Vitoria ()
{
	var fundovitoria = new Image();
	fundovitoria.src = "Fase 2/Victoria/vitoria.jpg";
	
	var creditos = new Image();
	creditos.src = "Fase 2/Victoria/botaocreditos.png";
	creditos_x = 530;
	creditos_y = 475;
	creditos_w = 200;
	creditos_h = 55;	
	
	var tentar = new Image();
	tentar.src = "Fase 2/Victoria/botaonovo.png";
	tentar_x = 120;
	tentar_y = 475;
	tentar_w = 200;
	tentar_h = 55;	
	
	var ganhei = new Audio();
	ganhei.src = "Audio/Vitoria.mp3";

	
	this.draw = function()
	
	{
		
		ganhei.play();
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundovitoria, 0, 0, canvas.width, canvas.height);
		context.drawImage(tentar, tentar_x, tentar_y, tentar_w, tentar_h);
		context.drawImage(creditos, creditos_x, creditos_y, creditos_w, creditos_h);
		//vitoria.play();
		
		if (MouseX > tentar_x && MouseX < tentar_x + tentar_w &&
		MouseY > tentar_y && MouseY < tentar_y + tentar_h && MousePress) 
		{
			scene = "menu"
		    estadobalao = 0
			console.log("quero mais uma vez");
			
			
		}
		
		
		if (MouseX > creditos_x && MouseX < creditos_x + creditos_w &&
		MouseY > creditos_y && MouseY < creditos_y + creditos_h && MousePress) 
		{
			scene = "creditos"
			console.log("quero mais uma vez");
			
		}
	}
	
	
	
}