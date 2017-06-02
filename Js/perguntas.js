function FaseDois ()
{
	
	var indice = 1
	
	var fundo = new Image();
	fundo.src = "Cenarios/cenario"+indice+".png"
	
	var limite = 1

	var vida =  new Image ();
	vida.src = "Fase 1/coracao.png";
	
	var contadorVida = 3;
	
	
	var fundoVida = new Image();
	fundoVida.src = "Fase 1/base de vida.png";
	fundoVida_x = 666;
	fundoVida_y = 8;
	fundoVida_w = 140;
	fundoVida_h = 50;
	
	
	var pergunta = new Image ();
	pergunta.src = "Fase 1/Perguntas/questao" + limite + ".png";
	pergunta_x = 230;
	pergunta_y = 430;
	pergunta_w = 445;
	pergunta_h = 95;
	
	var respostaerrada1 = new Image();
	respostaerrada1.src = "Fase 1/Respostas Erradas/questao"+ limite + " - alternativa errada 1.png";
	var respostaerrada2 = new Image();	
	
	respostaerrada2.src = "Fase 1/Respostas Erradas/questao"+ limite + " - alternativa errada 2.png";

	var respostacerta = new Image ();
	respostacerta.src = "Fase 1/Respostas Certas/questao"+ limite + " - alternativa certa.png";
	respostaerrada1_a = 1;
	respostaerrada2_a = 1;
	respostacerta_a = 1;
	
	
	respostaerrada1_y = respostaerrada2_y = respostacerta_y = 250;
	respostaerrada1_w = respostacerta_w = respostaerrada2_w = 150;
	respostacerta_h = respostaerrada2_h = respostaerrada1_h = 100;
	
	var respostaerrada1_x, respostaerrada2_x, respostacerta_x;
	
	this.randomizarPosicao = function()
	{
		posicoesrespostas = new Array(3);
		for(var i = 0; i < posicoesrespostas.length; i++)
		{
			posicoesrespostas[i] = 48 + 290 * i;
		}
		
		shuffle(posicoesrespostas);
		respostaerrada1_x = posicoesrespostas[0];
		respostaerrada2_x = posicoesrespostas[1];
		respostacerta_x = posicoesrespostas[2]; 
	}
	
	this.randomizarPosicao();
	this.carregarImagem = function()
	
	{
		pergunta.src = "Fase 1/Perguntas/questao" + limite + ".png";
		respostaerrada1.src = "Fase 1/Respostas erradas/questao"+ limite + " - alternativa errada 1.png";
		respostaerrada2.src = "Fase 1/Respostas erradas/questao"+ limite + " - alternativa errada 2.png";
		respostacerta.src = "Fase 1/Respostas Certas/questao"+ limite + " - alternativa certa.png";
		fundo.src = "Cenarios/cenario"+indice+".png";
	}
	    
	this.draw = function()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(pergunta,pergunta_x,pergunta_y,pergunta_w,pergunta_h);
		context.globalAlpha = 0.5;
		context.globalAlpha = respostaerrada1_a;
		context.drawImage(respostaerrada1,respostaerrada1_x,respostaerrada1_y,respostaerrada1_w,respostaerrada1_h);
		context.globalAlpha = respostaerrada2_a;
		context.drawImage(respostaerrada2,respostaerrada2_x,respostaerrada2_y,respostaerrada2_w,respostaerrada2_h);
		context.globalAlpha = respostacerta_a;
		context.drawImage(respostacerta,respostacerta_x, respostacerta_y, respostacerta_w, respostacerta_h);
		context.globalAlpha = 1.0;
		context.drawImage(fundoVida, fundoVida_x,fundoVida_y, fundoVida_w, fundoVida_h);
		
		if (MouseX > respostacerta_x && MouseX < respostacerta_x + respostacerta_w
		&& MouseY > respostacerta_y && MouseY < respostacerta_y + respostacerta_h) 
		{
			if(MousePress)
			{
				console.log ("sou a certa");
					limite++;
					
					if(limite == 5)
					{
						scene = "vitoria"
						limite = 1
						contadorVida = 3
					}
				
					indice++;
					
					if (indice == 5)
					{
						indice = 1
						
					}
					
				
				this.carregarImagem();
				this.randomizarPosicao();
				MousePress = false;
				
			}
			respostacerta_a = 1;
		}
		else
		{
			respostacerta_a = 0.7;
		}	
		
		if (MouseX > respostaerrada1_x && MouseX < respostaerrada1_x + respostaerrada1_w
		&& MouseY > respostaerrada1_y && MouseY < respostaerrada1_y + respostaerrada1_h) 
		{
			if(MousePress)
			{
				contadorVida--;
				MousePress = false;
				
				if(contadorVida == 0)
				{
					scene = "derrota"
					limite = 1
					console.log ("To em zero")
					contadorVida = 3
				}
			}
			respostaerrada1_a = 1;
		}
		else
		{
			respostaerrada1_a = 0.7;
		}
		
		if (MouseX > respostaerrada2_x && MouseX < respostaerrada2_x + respostaerrada2_w
		&& MouseY > respostaerrada2_y && MouseY < respostaerrada2_y + respostaerrada2_h) 
		{
			if(MousePress)
			{
				contadorVida--;
				MousePress = false;
				
				if(contadorVida == 0)
				{
					scene = "derrota"
					limite = 1
					contadorVida = 3
					console.log ("To em zero")
				}
				
			}
			respostaerrada2_a = 1;
		}
		else
		{
			respostaerrada2_a = 0.7;
		}
		
		for(var i = 0; i < contadorVida; i++)
		{
			context.drawImage(vida, fundoVida_x + 10 + i * 43, fundoVida_y + 8, 36, 34);
		}
	
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}