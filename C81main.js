var canvas = document.getElementById("canvas") ;
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth="4px";            
ctx.arc(100,200,40,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
   var entercolor = document.getElementById("color").value;
    
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("x"+ mousex + " y=" + mousey);
    ctx.beginPath();
ctx.strokeStyle=entercolor;
ctx.lineWidth="4px";
ctx.arc(mousex,mousey,40,0,360);
ctx.stroke();
}
function clear1(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

