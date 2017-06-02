function Animacao ()
{
	
	var data = new Date();
	var start = data.getTime();
	
	var current;	
	var currentFrame = 0;
	
	var images = new Array();
	var numFrames = 20;
	
	var w = 600;
	var h = 800;
	var x = 0
	var y = 0
	
	var entrada = new Image(); entrada.src = "Frames/entrada.jpg"
	var ex = 0
	var ey = 0
	var ew = canvas.width
	var eh = canvas.height
	
	var aqui = new Image ();
	aqui.src="Frames/botao_aperte.png";
	aqui_x = 308
	aqui_y = 715
	aqui_w = 250
	aqui_h = 50
	
	
	//LOOP
	var loopanim = true
	
	// preenchendo o array com [IMAGENS] e carregando as [IMAGENS]
	for (var i = 0; i < numFrames; i++)
	{
	    images[i] = new Image();
		images[i].src = "Frames/entrada" + (i+1) + ".jpg";
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
			if(currentFrame > 20)
	{
		loopanim = false
	}
		
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		// Desenha o frame atual da animação
		// http://www.w3schools.com/tags/canvas_drawimage.asp
		if(loopanim)context.drawImage(images[Math.floor((currentFrame) % numFrames)], x, y, w, h);		
		if(loopanim == false)	context.drawImage(entrada, ex, ey, ew, eh)
		//console.log(Math.floor(currentFrame)%numFrames);
		if(currentFrame > 20)	context.drawImage(aqui, aqui_x, aqui_y, aqui_w, aqui_h);
	
		var delta = deltaTime();	
		currentFrame += delta * 10;		
		console.log(currentFrame);
		console.log(loopanim)
		
		if (MouseX > aqui_x && MouseX < aqui_x + aqui_w &&
		MouseY > aqui_y && MouseY < aqui_y + aqui_h && MousePress && loopanim == false) 
		{
			scene = "menu"
			console.log("Voltar menu")
		}
		
		
	}
	
	this.update = function()
	{
		var delta = deltaTime();	
		currentFrame += delta * 10;		
		//console.log(currentFrame);
	}
	
	
	

	
	
}