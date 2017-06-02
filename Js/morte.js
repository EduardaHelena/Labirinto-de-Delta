function Morte ()

{
	
	var fundo = new Image();
	fundo.src = "TelasJogos/InicioFundo.png"
	
	var data = new Date();
	var start = data.getTime();
	
	var current;	
	var currentFrame = 0;
	
	var images = new Array();
	var numFrames = 47;
	
	var w = 800;
	var h = 600;
	var x = 0
	var y = 0
	

	var musica = new Audio();
	musica.src = "Mortes/Flechas Som/flechaSom.mp3"
	musica.load();


	//LOOP
	var loopanim = true
	
	// preenchendo o array com [IMAGENS] e carregando as [IMAGENS]
	for (var i = 0; i < numFrames; i++)
	{
	    images[i] = new Image();
		images[i].src = "Mortes/Flechas Imagens/Flechas" + (i+1) + ".png";
	}	
	
	
	/*this.update = function ()
	{
		var delta = deltaTime();	
		currentFrame += delta * 10;		
		console.log(currentFrame);
		
		
	}*/
	deltaTime = function ()
	
	{
		current = (new Date()).getTime();		
		
		//tempo de jogo
		//console.log((current - startGame) / 1000); 
		elapsed = current - start;
		start = current;
		var delta = elapsed / 1000;			
		//console.log(delta);
		return delta;
	}
	
	
	
	this.draw = function()
	{
		
			
			if(currentFrame > 47)
			{
				loopanim = false
			}
			
		
			
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(fundo,0,0,canvas.width,canvas.height);
			// Desenha o frame atual da animação
			// http://www.w3schools.com/tags/canvas_drawimage.asp
			musica.play();
			if(loopanim)context.drawImage(images[Math.floor((currentFrame) % numFrames)], x, y, w, h);		
			//console.log(Math.floor(currentFrame)%numFrames);
			if(currentFrame > 47 )
			{
				scene = "derrota"
				
			}
		
			
			var delta = deltaTime();	
			currentFrame += delta * 7;		

	}
	
	this.update = function()
	
	{
		var delta = deltaTime();	
		currentFrame += delta * 7 ;		
		//console.log(currentFrame);
		musica.play();
	}
	
	
	
	

	
	
}