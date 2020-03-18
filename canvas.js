console.log("ok")
var c = document.getElementById("myCanvas");
//geting context of canvas
var ctx = c.getContext("2d");
var rots  = 0;
var rotm = 0;
var roth = 0;
var rest  = 90*Math.PI/180;
function settime(h,m,s){
//total hour 
roth = h*30*Math.PI/180+m*0.5*Math.PI/180+s*1/120*Math.PI/180;
rotm = m*6*Math.PI/180+s*0.5*Math.PI/180;;
rots = s*6*Math.PI/180;
draw()

}
function draw(){
	
ctx.beginPath();
ctx.clearRect(0, 0, 800, 800);
	ctx.arc(x,y,100,0,2*Math.PI);
	ctx.font = "20px Arial";

	//geting randpm number
	var randx = Math.round(Math.random() * 256);
	var randy = Math.round(Math.random() * 256);
	var randz = Math.round(Math.random() * 256);

	console.log(randx,randy);
	
	
	
	ctx.strokeStyle = "rgba("+randx+","+randx+","+randz+",1)";
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x, y);
  	ctx.lineTo(x+Math.cos(rots-rest)*90, y+Math.sin(rots-rest)*90);
  	ctx.lineWidth = 2;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.strokeStyle = "rgba(255,100,0,1)";
	ctx.lineWidth = 3;
  	ctx.lineTo(x+Math.cos(rotm-rest)*70, y+Math.sin(rotm-rest)*70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.strokeStyle = "rgba(100,255,0,1)";
	ctx.lineWidth = 5;
  	ctx.lineTo(x+Math.cos(roth-rest)*60, y+Math.sin(roth-rest)*60);
	ctx.stroke();

	ctx.fillText("12",x+Math.cos(-95*Math.PI/180)*110, y+Math.sin(-95*Math.PI/180)*110);
	ctx.fillText("3",x+Math.cos(0)*110, y+Math.sin(0)*110);
	ctx.fillText("6",x+Math.cos(90*Math.PI/180)*110, y+Math.sin(90*Math.PI/180)*110);
	ctx.fillText("9",x+Math.cos(180*Math.PI/180)*110, y+Math.sin(180*Math.PI/180)*110);

	

}

c.onmousemove = function(e){

	
	x=e.clientX;
	y=e.clientY;
	draw()

}

function myTimers(){

	rots+=6*Math.PI/180;
	if(rots>360){
		rots= 0;
	}
	draw();


}
function myTimerm(){
	rotm+=6*Math.PI/180;
	if(rotm>360){
		rotm= 0;
	}
	draw();


}
function myTimerh(){
	roth+=0.5*Math.PI/180;
	if(roth>360){
		roth= 0;
	}
	draw();


}

setInterval(myTimers, 1000);

setInterval(myTimerm, 60000);

setInterval(myTimerh, 60000);





