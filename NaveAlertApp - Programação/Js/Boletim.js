
function Boletim ()
{
 
 
	var fundo = new Image ();
	fundo.src =  "monitoria/NOTAS.jpg"
	
	var alertar = new Image();
	alertar.src = "Monitoria/Avaliar.png"
	alertar_x = 390
	alertar_y = 740
	alertar_w = 200
	alertar_h = 60

	this.draw = function ()
	{
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(fundo,0,0,canvas.width,canvas.height);
		context.drawImage(alertar, alertar_x, alertar_y, alertar_w, alertar_h);
		
		
		if (MouseX > alertar_x && MouseX < alertar_x + alertar_w
		&& MouseY > alertar_y && MouseY < alertar_y + alertar_h
		&& MousePress)
		{
			console.log ("sim eu tenho");
			scene = "monitoriasao"
			
		}
	
	}

}